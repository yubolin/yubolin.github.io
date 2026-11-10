# InfraPilot site (static)

Brand: **InfraPilot** — a team product for infrastructure / operations in traditional industries.

Sold via integrator referrals. Private / on-prem deployment. Deal size under RMB 100,000.

Support copy (use exactly, no response times):

- ZH: `5×8 工作时间支持，由我们团队兜底`
- EN: `5×8 business-hours support, backed by our team`

Palette: dark navy + cyan + violet (matched to hero art).

Plain HTML/CSS/JS — no build step.

## Assets

- `assets/hero.webp` (~59KB) — preferred
- `assets/hero.jpg` (~93KB) — fallback
- `assets/projects/` — product screenshots from a local demo (fictional data)

## Local preview

```bash
cd /workspace/portfolio-site
python3 -m http.server 8080
```

## Add a product module

Edit `js/projects.js` and append to `window.INFRA_PILOT_PROJECTS`.
Use `status: "coming"` for placeholders.
Do not publish private GitHub repo URLs.

## Facts already on the page

- Contact email: `35210691@qq.com`
- Display / GitHub name: yubolin
- Working hours: Asia/Shanghai (UTC+8)
- Do not invent case studies, customer names, or SLA / response-time terms
- AI diagnosis, self-healing, and LLM ops are extended capabilities, not the default offer
