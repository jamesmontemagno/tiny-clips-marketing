export function validateCaptions(cues, duration) {
  if (!Array.isArray(cues) || cues.length === 0) throw new Error('Provide at least one caption.');
  if (!Number.isFinite(duration) || duration <= 0) throw new Error('Caption duration must be positive.');
  let end = 0;
  for (const [i, cue] of cues.entries()) {
    if (!cue || !Number.isFinite(cue.start) || !Number.isFinite(cue.end)
      || cue.start < end || cue.end <= cue.start || cue.end > duration) {
      throw new Error(`Caption ${i + 1} has invalid, overlapping, or out-of-range timing.`);
    }
    if (typeof cue.text !== 'string' || !cue.text.trim() || /[\r\n]|-->/.test(cue.text)) {
      throw new Error(`Caption ${i + 1} needs a nonempty, single-line subtitle.`);
    }
    if (cue.text.length / (cue.end - cue.start) > 24) {
      throw new Error(`Caption ${i + 1} exceeds 24 characters per second.`);
    }
    end = cue.end;
  }
}

export function captionAt(cues, seconds) {
  return cues.find((cue) => seconds >= cue.start && seconds < cue.end)?.text ?? '';
}

function timestamp(seconds, separator) {
  const ms = Math.round(seconds * 1000);
  const pad = (n, digits = 2) => String(n).padStart(digits, '0');
  return `${pad(Math.floor(ms / 3600000))}:${pad(Math.floor(ms / 60000) % 60)}:${pad(Math.floor(ms / 1000) % 60)}${separator}${pad(ms % 1000, 3)}`;
}

export function subtitleFiles(cues, duration) {
  validateCaptions(cues, duration);
  const blocks = (separator) => cues.map((cue, i) =>
    `${i + 1}\n${timestamp(cue.start, separator)} --> ${timestamp(cue.end, separator)}\n${cue.text}\n`).join('\n');
  return { srt: blocks(','), vtt: `WEBVTT\n\n${blocks('.')}` };
}
