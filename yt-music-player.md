---
title: YT Music Player
layout: page
permalink: /yt-music-player
parent: Projects
---

![Preview][SCREENSHOT]

Electron menubar [Electron](https://www.electronjs.org/) application _(inspired by [rosswaycaster/XM-Menu-Player][XMMenuPlayer])_ that wraps YouTube Music. Enjoy 🎶

## Instructions

1. Run the following commands in your terminal:

```sh
git clone https://github.com/tbr-development/YT-Music-Player
cd YT-Music-Player
yarn install
yarn package
```

2. Check the `out` folder for the packaged application to run.

## Notes

If you want to package a squirrel based app/installer, you can use `yarn make`. Once done, check the `out/make` folder for your new squirrel based app/installer.

Windows and linux users can use `Control+X` or `Command+X` to quit the app.
MacOS users can use `CMD+Q` to quit the app.

---

🧑‍⚖️ This is an unofficial application and not published or supported by Google, LLC. Intended for personal and educational purposes. I am liable for nothing.

[XMMenuPlayer]: https://github.com/rosswaycaster/XM-Menu-Player

[SCREENSHOT]: https://i.imgur.com/vMD8d3p.png