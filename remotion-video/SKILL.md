---
name: remotion-video
description: Turn a topic, script, or creative brief into a polished Remotion video with storyboard, sourced or generated media, synchronized audio and captions, preview checks, and rendered MP4. Use for new videos or revisions to Remotion video projects.
---

# Remotion video production

Deliver an actual rendered video and editable project, not just a script. Read [setup](references/setup.md) before creating a project; copy `assets/starter/` into the output project rather than editing the skill's master templates. Use [production templates](references/production.md) for planning and QA, and [example prompts](references/examples.md) for invocation examples.

## 1. Resolve the brief

Extract audience, purpose, message, target duration, aspect ratio/platform, style, language, brand constraints, supplied assets and output location from the request. Ask only for missing information that prevents useful work: absent topic, contradictory requirements, or a required asset/voice/service that is unavailable. Bundle essential questions. Do not make routine storyboard approval a gate.

Otherwise state defaults briefly and proceed: general audience, 30 seconds, 1920×1080 landscape, 30 fps, modern editorial motion graphics, language matching the request, readable captions, H.264 MP4. Use 1080×1920 for explicitly vertical social videos; use 1080×1080 for square. No paid generation by default. Prefer available authorized tools, supplied assets and original React graphics. If narration cannot be produced locally or with authorized tools, offer or use a clearly disclosed text-led treatment unless spoken narration is essential.

## 2. Script and storyboard

Write a hook, clear progression and closing takeaway or requested call to action. Estimate speech at 130–160 words/minute, then measure the actual voice track and revise timings. Verify factual claims where needed; preserve supplied approved wording. Record each scene's global start/end, narration, on-screen text, visual, animation, sound and caption cues. Use integer frames throughout. Keep on-screen copy shorter than narration.

For overlapping transitions, total frames = sum(scene durations) − sum(transition durations). Voice and caption cues use the resulting global timeline, not unadjusted scene totals. Leave a readable opening and closing hold. If duration is strict, adjust script before generating repeated paid takes.

## 3. Produce assets

Discover available media tools before choosing services. Generate images with an available image tool and its applicable skill; use a consistent palette, composition, lighting and subject description. Source stock from licensed sources when appropriate. Download assets to `public/` only when permitted, record original URL, creator, license and attribution requirements in the asset ledger. Do not treat search previews as licensed source material. Never invent asset provenance.

For voiceover, use a consented voice in the correct language, provide pronunciation guidance, generate by sentence/scene when revisions are likely, and measure the resulting files. Do not clone a person's voice without permission. Use existing authorized TTS or local speech tools before proposing a paid API. Keep secrets in environment variables outside browser code, props, logs and source control. Ask about payment only when a paid dependency is necessary and not already authorized; continue independent work meanwhile.

Use licensed music, trim or loop deliberately, fade ends and duck under narration. Prefer no music over unlicensed music. Produce captions from the final audio using available alignment/transcription tools, correct names and punctuation, then inspect sync. Script-estimated cues are provisional until checked against speech. Export SRT or VTT alongside burned-in captions when requested. For silent videos use matching timed text cues without claiming transcription.

## 4. Build the composition

Use the starter's data-driven scenes, reusable Scene and Captions components, frame-based motion and fades. Replace demo content completely. Keep the existing project conventions when modifying an established project. Pin all Remotion packages to exactly the same version and retain the lockfile. Use supported APIs for that pinned version.

Drive animations with `useCurrentFrame`, `interpolate` and `spring`, never timers, CSS animations or unseeded randomness. Resolve assets with `staticFile`, load images with `Img`, and use Remotion media components so rendering waits for assets. Ensure fonts are loaded before rendering; supply fonts with coverage for the chosen language. Use local assets for reliable final renders.

Set composition width, height, fps and duration from the final timeline. Keep global narration and caption layers outside overlapping scene transitions to avoid duplicate speech/text. Explicitly trim, position and fade music. For video clips, match trim ranges and handle their audio deliberately. Maintain safe margins of at least 5%, enlarge bottom clearance for platform UI, and fit captions to two readable lines. Adapt typography and layout to aspect ratio rather than merely scaling the landscape layout.

## 5. Preview, correct and render

Run type checking and inspect Studio. Render a short low-resolution MP4 spanning a transition with audio. Review opening, middle and closing frames plus every scene boundary for clipping, missing assets, contrast, spelling, cropping and motion. Listen to the entire draft for pronunciation, pacing, clipping, music balance and abrupt cuts; inspect captions against speech. Fix issues before the final render. If playback or visual inspection is unavailable, state exactly what remains unverified.

Render the final MP4 using the setup commands. Verify file exists and is nonempty, inspect media dimensions, duration, fps and codecs when a probe tool is available, and play the exported file rather than relying solely on Studio. If rendering fails, fix the concrete failure and retry; do not loop blindly or claim success from a command launch. Report missing dependencies honestly.

Deliver a link to the MP4, editable source, brief/storyboard and asset ledger, plus captions if produced. State dimensions, duration, language, and any material limitations. Do not publish or upload externally unless requested.
