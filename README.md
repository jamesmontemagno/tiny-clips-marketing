# Tiny Clips Marketing

This public repository contains the source, assets, and production skill for Tiny Clips launch videos.
It is standalone; the Tiny Clips app repository does not include it as a submodule.

## Projects

- [`marketing/hype-video/`](./marketing/hype-video/) is the reusable release-video project.
- [`marketing/studio-launch/`](./marketing/studio-launch/) is the self-contained Studio 2.0 campaign snapshot.
- [`.github/skills/hype-video/`](./.github/skills/hype-video/) contains the reusable Hype Video skill.

Open a project folder and follow its README to install dependencies, review the cut, and render.
Requires Node.js 22.12 or later, FFmpeg, and Google Chrome or Microsoft Edge.

Generated output and dependencies are ignored by Git. Final MP4s are rendered locally and should
be shared through the appropriate release or media channel rather than committed to source history.

## App changelogs

The latest shipped app features are documented in the
[macOS changelog](https://github.com/jamesmontemagno/tiny-clips/blob/main/CHANGELOG.md) and the
[Windows changelog](https://github.com/jamesmontemagno/tiny-clips/blob/main/windows/CHANGELOG.md).
