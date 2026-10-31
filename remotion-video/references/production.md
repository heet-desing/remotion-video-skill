# Reusable production documents

Create these in each output project and fill them with actual decisions.

## brief.md

- Topic and intended outcome:
- Audience and platform:
- Duration, dimensions, fps:
- Style, palette, typeface, language:
- Voice, music and captions:
- Required claims, sources, brand assets:
- Budget/service authorization:
- Defaults used and essential unresolved inputs:

## storyboard.md

| Scene | Global frames [start,end) | Narration | On-screen copy | Visual/source | Motion/transition | Audio/captions |
|---|---|---|---|---|---|---|

Record transition overlaps explicitly. Measure voiceover before locking the timeline. At 30 fps, 30 seconds equals 900 frames; three scenes with two 12-frame overlaps must sum to 924 frames.

## assets.csv

```csv
file,kind,source_url_or_tool,creator_or_voice,license_or_permission,attribution,scene,notes
```

For generated assets record model/tool and prompt in notes; for supplied assets record that provenance without inventing a license.

## qa.md

- Actual rendered duration and target tolerance:
- Dimensions, fps, video/audio codecs:
- Opening/closing hold and every transition inspected:
- No missing files, black frames, overflow, awkward crops or unreadable text:
- Language/font coverage and spelling checked:
- Entire audio listened to; voice clear, no clipping or abrupt cuts:
- Caption alignment and line breaks reviewed:
- Asset rights/attribution recorded:
- Final MP4 played and source project reproducible:
- Unverified items and reason:

## Caption timing

Starter cues use global integer frames, inclusive start and exclusive end. Convert aligned seconds with `Math.round(seconds * fps)`, reject empty/overlapping cues, and clamp to composition bounds. For SRT, convert frames to milliseconds, format `HH:MM:SS,mmm`, number cues and separate with a blank line. Use final voice audio as timing authority.
