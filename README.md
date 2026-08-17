# Portfolio Website

Personal portfolio for Muhammad Asad — Data Analyst / Data Scientist / Web Developer. A single-page
React site featuring 13 data & ML projects and 6 designed/built websites, with dynamic category
filtering, live/case-study status badges, and links straight out to GitHub repos and live deployments.

**Live site:** https://themuhammadasad.github.io/

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · deployed to GitHub Pages via GitHub Actions

## Structure

```
portfolio-website/
├── src/
│   ├── components/       # Nav, Hero, About, Projects, Websites, Experience, Contact, Footer
│   ├── data/              # projects.ts, websites.ts — content as data, not hardcoded markup
│   └── index.css          # design tokens (color/font) + Tailwind import
├── public/
│   ├── images/profile.jpg
│   ├── screenshots/       # compressed client-site homepage screenshots
│   └── Muhammad-Asad-CV.pdf
└── .github/workflows/deploy.yml
```

## Content sections

- **Hero** — role, short bio, stats (projects/websites/publications), résumé download
- **About** — background narrative + skills grouped by category
- **Projects** — all 13 GitHub data/ML/Power BI projects, filterable by category, linking to code and live demos where deployed
- **Web Design & Development** — 6 websites designed and built (2 own products, 4 freelance client work), each linking live or presented as a case study with a screenshot
- **Experience & Education** — work history timeline, academic background, and publications
- **Contact** — direct email/phone/LinkedIn/GitHub links

## How to run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to GitHub Pages. The repo is named `themuhammadasad.github.io`, GitHub's special "user
site" convention, so it serves from the root domain with Vite `base` set to `/`.
