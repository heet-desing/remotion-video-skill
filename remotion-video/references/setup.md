# Setup and dependencies

## Install the skill

Copy the entire `remotion-video` folder into `$CODEX_HOME/skills/` (normally `~/.codex/skills/`; on Windows `%USERPROFILE%\.codex\skills\`). Open a new Codex chat and invoke `$remotion-video`. This delivered folder is a portable skill package; creating it does not install it globally.

## Create a video project

Copy the contents of `assets/starter/` to a new project directory. Install a supported Node.js LTS release and npm. Internet access is required for initial packages and potentially the rendering browser. From that directory run:

```powershell
npm install --save-exact remotion@4 @remotion/cli@4 @remotion/transitions@4 react@18 react-dom@18
npm install --save-dev --save-exact typescript@5 @types/react@18 @types/react-dom@18
npx remotion versions
npm run check
npm run studio
```

This starter targets Remotion 4 APIs. Check that every Remotion package resolved to the same exact version; align them before proceeding. Commit package.json and package-lock.json. Subsequent installs use `npm ci`. Do not silently migrate the starter to a new major version. `public/` holds local images, fonts and audio; `src/video.json` is the editable demo timeline.

```powershell
# Preview all scenes at low resolution
npx remotion render src/index.tsx Video out/draft.mp4 --scale=0.5 --codec=h264
# Final export
npm run render
# Inspect a representative frame
npx remotion still src/index.tsx Video out/frame.png --frame=120
```

Optional system FFmpeg/ffprobe is useful for audio normalization and final media inspection, but is not an assumed prerequisite for the starter render. Remotion manages its own rendering dependencies; follow its version-specific browser/OS installation guidance if rendering reports missing libraries. Example probe: `ffprobe -v error -show_format -show_streams out/final.mp4`.

## Services and costs

| Capability | Required? | Keys/payment |
|---|---|---|
| Node.js, npm, React, TypeScript | Yes | No service key or usage payment |
| Remotion + CLI + transitions | Yes | License conditions apply; eligible individuals/small companies can use free, other organizations may need a paid license. Check current terms before commercial deployment |
| Local render browser | Yes | No generation API key; compute/disk resources required |
| Image generation connector | Optional | Account/tool access; plan limits or charges may apply |
| OpenAI image/TTS/transcription APIs | Optional | API key and usage billing; a chat subscription does not establish API billing access |
| ElevenLabs voice API | Optional | API key; plan quotas/payment and voice permissions apply |
| Stock visual/music libraries | Optional | License/attribution varies; premium assets cost money, some download APIs need keys |
| Local recording, local TTS/transcription | Optional | No hosted API key; model downloads, compute and model licenses may apply |
| Cloud rendering | Optional | Provider credentials and compute/storage charges; local render is default |

Never require all these services. Choose only what the brief needs, verify current pricing when proposing spend, and do not bake credentials into the template. The runnable demo uses original motion graphics and no external media or paid generation.

Official references checked 2026-10-31:
- [Project setup and system requirements](https://www.remotion.dev/docs/)
- [Rendering](https://www.remotion.dev/docs/render)
- [Transition timing](https://www.remotion.dev/docs/transitions/transitionseries)
- [Remotion license](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)
