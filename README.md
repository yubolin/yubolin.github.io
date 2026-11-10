# InfraPilot portfolio (static)

Brand: **InfraPilot** — enterprise AI adoption for infrastructure / ops.

Palette: dark navy + cyan + violet (matched to hero art).

Plain HTML/CSS/JS — no build step.

## Assets

- `assets/hero.webp` (~59KB) — preferred
- `assets/hero.jpg` (~93KB) — fallback

## Local preview

```bash
cd /workspace/portfolio-site
python3 -m http.server 8080
```

## Add a project

Edit `js/projects.js` and append to `window.INFRA_PILOT_PROJECTS`.
Use `status: "coming"` for placeholders (see TokenOps).

## Placeholders to fill

- Display name (`Your Name`)
- Contact email (`your.email@example.com`)
- Optional work history
- TokenOps details when ready
