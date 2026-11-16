import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import { captionAt, subtitleFiles, validateCaptions } from '../src/captions.js';

test('seeking backward and across adjacent cue boundaries has no stale caption', () => {
  const cues = [{ start: 0, end: 2, text: 'First' }, { start: 2, end: 4, text: 'Second' }];
  assert.equal(captionAt(cues, 2), 'Second');
  assert.equal(captionAt(cues, 1), 'First');
  assert.equal(captionAt(cues, 4), '');
  assert.equal(captionAt(cues, -1), '');
});

test('subtitle output rounds timestamps with carry and uses the correct separators', () => {
  const cues = [{ start: 59.9996, end: 62, text: 'Keep the moment.' }];
  const files = subtitleFiles(cues, 63);
  assert.equal(files.srt, '1\n00:01:00,000 --> 00:01:02,000\nKeep the moment.\n');
  assert.equal(files.vtt, 'WEBVTT\n\n1\n00:01:00.000 --> 00:01:02.000\nKeep the moment.\n');
});

test('invalid, overlapping, unreadably fast, and malformed cues fail explicitly', () => {
  for (const cues of [
    [],
    [{ start: NaN, end: 2, text: 'Test' }],
    [{ start: 1, end: 1, text: 'Test' }],
    [{ start: -1, end: 2, text: 'Test' }],
    [{ start: 0, end: 6, text: 'Test' }],
    [{ start: 0, end: 3, text: 'First' }, { start: 2, end: 4, text: 'Second' }],
    [{ start: 0, end: 2, text: ' ' }],
    [{ start: 0, end: 2, text: 'Invalid\ncue' }],
    [{ start: 0, end: 2, text: 'Bad --> cue' }],
    [{ start: 0, end: 0.1, text: 'Too many words to read' }],
  ]) assert.throws(() => validateCaptions(cues, 5));
});

test('the shipped caption track covers the entire cut and meets readability limits', () => {
  const sandbox = { window: {} };
  runInNewContext(readFileSync(new URL('../src/content.js', import.meta.url), 'utf8'), sandbox);
  const cues = sandbox.window.HYPE_CONTENT.captions;
  validateCaptions(cues, 45);
  assert.equal(cues[0].start, 0);
  assert.equal(cues.at(-1).end, 45);
  for (let i = 1; i < cues.length; i++) assert.equal(cues[i].start, cues[i - 1].end);
  const files = subtitleFiles(cues, 45);
  assert.equal(files.srt.match(/ --> /g).length, cues.length);
  assert.equal(files.vtt.match(/ --> /g).length, cues.length);
});
