# Tiny Clips 2.1 release video

A 45-second, 1920x1080, 60 fps cut highlighting **Agent Control** and **Studio annotations**,
with a supporting Studio captions segment. Every frame has an authored, burned-in caption,
so the video works without sound. Matching SRT and WebVTT tracks are generated from the same
timed copy. Music is the existing locally synthesized, polished lo-fi soundtrack; motion is
subtle and the palette is ice (cyan/blue/violet). There is no spoken voiceover.

The app and workflow visuals are explicitly labeled **illustrations**, not new app footage.
No private captures, pairing tokens, downloaded speech models, external artwork, or remote
services are used. The approved Studio 2.0 snapshot in `../studio-launch/` is unchanged.

## Render and review

Requires Node 22.12+, FFmpeg on `PATH`, and Google Chrome, Microsoft Edge, or Chromium.
Set `BROWSER_PATH` to select another Chromium executable.

```bash
cd marketing/hype-video
npm ci
npm test           # caption timing, seeking, readability, and subtitle serialization
npm run review    # layout checks + contact sheets in out/review/
npm run render    # out/tiny-clips-hype.mp4: 45 s, 1080p60, H.264 + AAC
npm run draft     # out/tiny-clips-hype-draft.mp4: 1080p30
npm run preview   # local, scrub-enabled preview with music
npm run captions  # out/tiny-clips-2.1.srt + out/tiny-clips-2.1.vtt
```

`out/` and `node_modules/` are ignored. Do not commit generated drafts, audio, or final renders;
share the MP4 through the release/media channel. SRT/VTT are alternative upload tracks; do not
enable one on top of the burned-in version unless the player lets viewers hide it.

```bash
node scripts/render.mjs --still 5,18,26,33,43
node scripts/render.mjs --from 15 --to 22.5
node scripts/render.mjs --no-audio
```

Sidecars describe the **full** 45-second cut, not a `--from`/`--to` excerpt. Check the finished
file with:

```bash
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate:format=duration \
  -of default=nw=1 out/tiny-clips-hype.mp4
ffmpeg -v error -i out/tiny-clips-hype.mp4 -f null -
```

## Storyboard

The existing 128 BPM grid is unchanged: one bar is 1.875 seconds, 24 bars is 45 seconds.

| Bars | Time | Scene |
| --- | --- | --- |
| 0-2 | 0:00-0:03.750 | Tiny Clips 2.1: Your agent. Your story. |
| 2-5 | 0:03.750-0:09.375 | Agent Control: opt in, pair, choose scopes, revoke anytime |
| 5-8 | 0:09.375-0:15 | Agent workflow: record a target window, edit Studio, export a new MP4 |
| 8-12 | 0:15-0:22.500 | Studio arrow, callout, shape, emoji, solid redaction, selection handles, annotation lane |
| 12-15 | 0:22.500-0:28.125 | Screen-attached annotations follow zoom; frame-attached annotations stay put |
| 15-19 | 0:28.125-0:35.625 | On-device generation/import, transcript editing, checks, subtitle export, drawn captions |
| 19-21 | 0:35.625-0:39.375 | Three-tile recap: Agent Control, Studio annotations, captions |
| 21-24 | 0:39.375-0:45 | macOS + Windows, free/open source, tinyclips.app, Settings reminder |

## Product accuracy

Copy is based on the shipped 2.1 sections of the app's
[macOS changelog](https://github.com/jamesmontemagno/tiny-clips/blob/main/CHANGELOG.md) and
[Windows changelog](https://github.com/jamesmontemagno/tiny-clips/blob/main/windows/CHANGELOG.md),
plus the [Agent integration guide](https://github.com/jamesmontemagno/tiny-clips/blob/main/docs/agent-integration.md).

- Agent Control is off by default. The agent runs on the same computer, pairs with approval,
  and only gets granted scopes. OS permissions still apply. Deleting, uploading, and discarding
  still ask first; every request is logged. Tiny Clips supplies tools, not an AI model.
- Studio remains a Preview. The cut reminds viewers to enable it but does not claim that it
  starts disabled; 2.1 preserves a user's saved choice. The pictured workflow needs Studio on.
- Caption generation needs macOS 26+ on supported Macs. Windows downloads a local speech model
  on first use. Other Macs can still import, edit, export, and draw captions. Audio stays local.
- Solid redaction is shown for secrets. Blur/pixelation are not presented as guaranteed
  removal of sensitive information.
- This promo's captions are authored marketing copy, not output of Tiny Clips speech recognition.

## Editing

- `src/index.html` contains the scene layout. Keep `data-bar`/`data-bars` contiguous and on
  the beat grid. Keep illustrations labeled.
- `src/content.js` holds the recap tiles and full-length `captions` track. Caption cues must be
  ordered, non-overlapping, single-line source text, and at most 24 characters per second.
  The player wraps them into at most two lines in a reserved safe area.
- `src/captions.js` is shared by the browser and `scripts/captions.mjs`; SRT/VTT timestamps
  use the same cue data as the burned-in text.
- `src/release.css` styles this cut without changing the preserved Studio snapshot.
  `src/styles.css` provides the existing design system and timeline primitives.
- `src/player.js` keeps animations paused on one deterministic seekable timeline. Reviews check
  every caption's layout and scene copy bounds, plus recap tile/heading fit.
- `src/creative.js` preserves the previous polished/subtle/lo-fi/ice creative direction.
  `scripts/audio.mjs` synthesizes the soundtrack locally.

The old privacy-safe `assets/studio-demo.mp4` and `scripts/studio-media.mjs` remain available
for future footage-led cuts, but this illustrated cut does not extract or depend on them.

## Suggested social copy

Tiny Clips 2.1 is here: Agent Control, Studio annotations, and captions. Let your agent capture,
point out what matters, and tell a clearer story. Free and open source for macOS + Windows.
tinyclips.app

Alternative: Your agent. Your story. Tiny Clips 2.1 brings opt-in Agent Control, Studio arrows,
callouts and emoji, plus captions. Free and open source for macOS + Windows. tinyclips.app
