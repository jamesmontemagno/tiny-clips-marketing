// What the video says about the latest releases. To hype new features, edit this file and
// re-render. This cut leads with Studio, Agent Control, and everyday 2.3.0 upgrades.
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
    lead: 'The 2.3.0 release.',
    title: 'Big things, tiny app.',
  },
  whatsNew: {
    pill: 'Tiny Clips 2.3.0',
    heading: 'And so much more.',
    platforms: 'macOS + Windows',
    tiles: [
      {
        title: 'Studio is ready',
        blurb: 'Capture, compose, cut, and export.',
        accent: 'violet',
        visual: { type: 'stat', value: 'Studio', caption: 'Generally available' },
      },
      {
        title: 'Agent Control',
        blurb: 'Let agents capture, edit, and export.',
        accent: 'cyan',
        visual: { type: 'panel', tags: ['Capture', 'Studio', 'Library'] },
      },
      {
        title: 'Open & find',
        blurb: 'Direct MP4/MOV and faster Recent Captures.',
        accent: 'orange',
        visual: { type: 'toggle', from: 'MP4 / MOV', to: 'Studio', caption: 'Open directly' },
      },
    ],
  },
};
