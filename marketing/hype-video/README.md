# Tiny Clips hype video

**Agent Mode 2.1 — Your next demo starts with a prompt.** A 45-second, 1920×1080, 60 fps animated
launch film. The example session runs GitHub Copilot CLI inside a stylized VS Code terminal;
Claude Code and Codex CLI show two other ways to ask for the same local tools. The robot, Orbit
Atlas demo window, interface illustrations and funk soundtrack are generated locally. No live
agent, personal screen capture, API key, or Studio footage is needed to preview or render.

## Hype a new release

Edit `src/content.js` — it holds the “What’s new” tiles and the line that introduces them — then:

```bash
npm run review     # contact sheets in out/review/, and a check that every tile's text fits
npm run render     # out/tiny-clips-hype.mp4
```

The `hype-video` skill (`../../.github/skills/hype-video/SKILL.md`) walks through the whole flow,
including a short creative brief, choosing features from the changelogs, and drafting the post.

## Render it

Requires Node 22.12+, `ffmpeg` on your `PATH`, and Microsoft Edge or Google Chrome installed (set
`BROWSER_PATH` to point at a different Chromium-based browser).

```bash
cd marketing/hype-video
npm install
npm run render     # out/tiny-clips-hype.mp4  (60 fps, about three minutes)
npm run draft      # out/tiny-clips-hype-draft.mp4  (30 fps, under a minute)
npm run review     # one frame per scene as contact sheets -> out/review/
npm run preview    # live preview with a scrubber and the selected soundtrack
```

`out/` is ignored by git. Useful extras:

```bash
node scripts/render.mjs --still 5,12.5,43     # PNG stills at those seconds -> out/stills/
node scripts/render.mjs --from 15 --to 21     # render part of the timeline
node scripts/render.mjs --no-audio            # picture only, for adding your own music
```

## Storyboard and product grounding

At 128 BPM, one bar lasts 1.875 seconds. The 24 bars tell one story:

| Bars | Scene | Action |
| --- | --- | --- |
| 0–2 | Agent Mode | The capture robot introduces Tiny Clips 2.1. |
| 2–5 | Pair once | Enable **Settings → Agent Control**, run `tinyclips pair`, approve scoped access. Audit and revoke in Settings. |
| 5–8 | Bring your own agent | Copilot CLI records a window, Claude Code annotates a screenshot, Codex CLI trims a take. These are alternative example prompts, not simultaneous sessions. |
| 8–11 | Type the request | Copilot discovers Orbit Atlas via `capture.targets`, records the window with `recording.startVideo` (`studio=true`) and saves it with `recording.stop`. The click is the user's. |
| 11–14 | Follow the click | Read the project, suggest a click zoom, then apply the edit. The playhead and preview show the result. |
| 14–17 | The clip and the cover | `studio.export` writes a new MP4. `editor.saveFrame` extracts a cover image from the exported video. |
| 17–22 | What else can you ask? | OCR, scrolling capture, annotations and redactions, video/GIF trimming, library actions, and the five plugin Skills. |
| 22–24 | End card | Agent Mode · macOS + Windows · tinyclips.app. |

The upcoming-release claims follow the merged [Agent Control implementation](https://github.com/jamesmontemagno/tiny-clips/pull/559),
including [trim and frame export](https://github.com/jamesmontemagno/tiny-clips/commit/0b21d762b9),
and the [Studio window click-event update](https://github.com/jamesmontemagno/tiny-clips/pull/562).
The [integration guide](https://github.com/jamesmontemagno/tiny-clips/blob/de78c2608e/docs/agent-integration.md)
and [command contract](https://github.com/jamesmontemagno/tiny-clips/blob/de78c2608e/shared/automation/commands.json)
are the references for running the illustrated workflow:

- Use an Agent Control–capable app on the same machine as the agent, with the .NET 10 CLI or a configured local stdio MCP server. Pair first. Tiny Clips provides tools, not the AI model or a built-in chat box.
- Enable Studio before recording a Studio project. Use the current window ID from target discovery. The agent can capture scrolls or clicks; Tiny Clips does not drive other apps' input. OS permissions and feature entitlements still apply.
- `studio.zoom.suggest` is read-only. To apply suggestions, preserve manual zooms and pass the observed modification time and revision to `studio.project.edit`. Export to a new MP4 in the configured video folder.
- Sensitive delete, upload and discard requests need in-app approval. No external service is contacted by the film.

## Editing the cut

- [`src/index.html`](src/index.html) is the storyboard. `data-bar` and `data-bars` set scene boundaries; `data-at` offsets an entrance in beats. The prompt types from the seek clock, so scrubbing backward or rendering in parallel is deterministic.
- [`src/agent-art.svg`](src/agent-art.svg) supplies the original robot and the Orbit Atlas artwork shared by the recording, Studio preview and exports. [`src/agent.css`](src/agent.css) styles the orbital field guide; [`src/styles.css`](src/styles.css) supplies the shared timeline and tile primitives.
- [`src/content.js`](src/content.js) holds the agent roster headline and the six capability tiles. Run `npm run review` after changing them; inspect the sheets in `out/review/` for readable copy, artwork and timing.
- [`src/creative.js`](src/creative.js) selects `new-release`, `full-send`, `punchy`, `funk` and `robot` for this cut. The original `neon`, `sunset` and `ice` themes remain available. [`scripts/audio.mjs`](scripts/audio.mjs) synthesizes the music; `silent` skips it.
- For the footage-based Studio 2.0 film, use the [preserved Studio launch project](../studio-launch/README.md).
