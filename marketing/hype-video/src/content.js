// What the video says about the latest releases. To hype new features, edit this file and
// re-render. This cut follows an agent from pairing to a finished Studio export.
//
// tiles: 3 to 6 entries, shown in order, one landing every few beats.
//   title   one line, about 22 characters or fewer
//   blurb   one sentence, two lines at most (about 44 characters)
//   accent  blue | violet | pink | orange | green | cyan | red
//   visual  one of:
//     { type: 'compare', from: 'PNG', to: 'WebP', ratio: 0.42 }    two bars; the second shrinks to ratio (0–1) of the first
//     { type: 'toggle', from: 'H.264', to: 'H.265', caption: 'HEVC' }   a switch that flips from -> to
//     { type: 'emoji', emoji: ['😎', '🎉', '👀'] }                  three emoji; the middle one is selected and rotates
//     { type: 'slider', from: 100, to: 50, unit: '%', size: [1920, 1080] }   a slider; size (optional) shows scaled dimensions
//     { type: 'keys', keys: ['⌃', '⌥', '⌘', '1'] }                  key caps pressed in order (up to 5)
//     { type: 'stat', value: '60 fps', caption: 'GPU pipeline' }    one big number or word
//     { type: 'list' }                                              a menu of rows with thumbnails
//     { type: 'panel', tags: ['demo', 'bug', 'ui'] }                a grid with a details pane
//
// The renderer refuses to run if a tile's text does not fit, so check with `npm run review`.
window.HYPE_CONTENT = {
  breakdown: {
    lead: 'One local connection.',
    title: 'Bring your own agent.',
  },
  whatsNew: {
    pill: 'New in 2.1',
    heading: 'What else can you ask?',
    platforms: 'macOS + Windows',
    tiles: [
      { title: 'Read the screen', blurb: 'Extract text without touching the clipboard.', accent: 'cyan', visual: { type: 'stat', value: 'OCR', caption: 'Window or region' } },
      { title: 'Capture a long page', blurb: 'Stitch a screenshot as the page scrolls.', accent: 'orange', visual: { type: 'list' } },
      { title: 'Mark it up', blurb: 'Add arrows, steps or redactions to a copy.', accent: 'green', visual: { type: 'stat', value: '01 →', caption: 'Numbered callouts' } },
      { title: 'Trim a take', blurb: 'Record, pause and trim. Keep the original.', accent: 'blue', visual: { type: 'toggle', from: 'Video', to: 'GIF' } },
      { title: 'Use the library', blurb: 'List, reveal or copy. Approve uploads.', accent: 'pink', visual: { type: 'stat', value: '↗', caption: 'Your files, your call' } },
      { title: 'Add the agent plugin', blurb: 'Setup, capture, demo, Studio and library.', accent: 'violet', visual: { type: 'stat', value: '5 skills', caption: 'Bundled with MCP' } },
    ],
  },
};
