# LUNARA Brand Fonts — Drop Files Here

## Folder Structure Expected

```
fonts/
├── AllRoundGothic/
│   ├── AllRoundGothic-Bold.woff2   ← Primary (best compression)
│   ├── AllRoundGothic-Bold.woff    ← Fallback
│   └── AllRoundGothic-Bold.otf    ← Fallback
│
└── Aloevera/
    ├── Aloevera-Light.woff2
    ├── Aloevera-Light.woff
    ├── Aloevera-Light.otf
    ├── Aloevera-Medium.woff2
    ├── Aloevera-Medium.woff
    └── Aloevera-Medium.otf
```

## Usage in CSS
The fonts are pre-wired via `@font-face` in `css/style.css`.
Once you drop the files in, they will automatically activate.

## Font Roles (from Brand Guidelines)
| Font               | Weight   | Used For                            |
|--------------------|----------|-------------------------------------|
| All Round Gothic   | Bold 700 | Headlines (h1–h6), section titles  |
| Aloevera Light     | 300      | Body copy, paragraphs, subtitles   |
| Aloevera Medium    | 500      | Buttons, nav links, labels, badges |

## Color Palette (from Brand Guidelines)
| Token                  | Hex       | Meaning                    |
|------------------------|-----------|----------------------------|
| `--brand-deep-purple`  | `#3e0f6b` | Primary dark brand color   |
| `--brand-vibrant-purple` | `#6a1894` | Primary vibrant accent   |
| `--brand-lavender`     | `#b952eb` | Secondary bright accent    |
| `--brand-light-grey`   | `#e1e1e1` | Light text / secondary     |
| `--bg-primary`         | `#0c0314` | Page background (near black)|
