import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { subtitleFiles } from '../src/captions.js';

const sandbox = { window: {} };
runInNewContext(readFileSync(new URL('../src/content.js', import.meta.url), 'utf8'), sandbox);
const files = subtitleFiles(sandbox.window.HYPE_CONTENT.captions, 45);
const out = new URL('../out/', import.meta.url);
mkdirSync(out, { recursive: true });
for (const [extension, text] of Object.entries(files)) {
  const path = new URL(`tiny-clips-2.1.${extension}`, out);
  writeFileSync(path, text);
  console.log(path.pathname);
}
