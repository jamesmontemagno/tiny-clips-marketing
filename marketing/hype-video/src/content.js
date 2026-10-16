// What the video says about the latest releases. To hype new features, edit this file and
// re-render. This cut previews the Windows 2.1 screenshot features.
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
//     { type: 'background' }                                      custom-image screenshot backdrop
//     { type: 'gradient' }                                        two color stops and a direction dial
//     { type: 'resolution' }                                      pre-capture size selection illustration
//
// The renderer refuses to run if a tile's text does not fit, so check with `npm run review`.
window.HYPE_CONTENT = {
  breakdown: {
    lead: 'Your screenshot.',
    title: 'Your style.',
  },
  whatsNew: {
    pill: '2.1 Preview',
    heading: 'Make every capture yours.',
    platforms: 'Windows',
    tiles: [
      {
        title: 'Custom backgrounds',
        blurb: 'Give screenshots a backdrop of your own.',
        accent: 'pink',
        visual: { type: 'background' },
      },
      {
        title: 'Gradient pickers',
        blurb: 'Choose both colors and the direction.',
        accent: 'violet',
        visual: { type: 'gradient' },
      },
      {
        title: 'Resolution quick picks',
        blurb: 'Pick a capture size before you screenshot.',
        accent: 'cyan',
        visual: { type: 'resolution' },
      },
    ],
  },
};
