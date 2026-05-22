# 华夏义民起义、变革、正常化之法理

Static academic book website built with Astro, Tailwind CSS, and Markdown content files.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Local development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

## Content Editing

- Public pages: `src/content/pages/*.md`
- Volume pages and chapter cards: `src/content/volumes/*.md`
- Online reading chapters: `src/content/book/**/*.md`
- Download file placeholders: `public/downloads/`
- Author media materials: `public/media/`
- Future English planning: `src/i18n/en/README.md`

Each online reading file supports this frontmatter for future search and bilingual expansion:

- `title`
- `volume`
- `chapterNumber`
- `summary`
- `keywords`
- `slug`

Optional helper fields:

- `volumeSlug`
- `order`
- `language`

Replace the placeholder body text in `src/content/book/` with the full book text after uploading the manuscript.

Example chapter file:

```markdown
---
title: "第一章：心境之名义"
volume: "卷一：心境科学原理概论"
chapterNumber: 1
summary: "本章简述。"
keywords: ["心境", "主体", "价值感受"]
slug: "volume-1/chapter-1"
---

这里放置完整章节正文。
```

## Downloads

Upload the final files to:

- `public/downloads/huaxia-yimin.pdf`
- `public/downloads/huaxia-yimin.docx`

Stable public links:

- `/downloads/huaxia-yimin.pdf`
- `/downloads/huaxia-yimin.docx`

Astro copies everything under `public/` into the static build output. Keep the PDF and DOCX files in `public/downloads/` so they are included on GitHub Pages, Cloudflare Pages, Vercel, and Netlify.

## Routes

- `/`
- `/introduction/`
- `/author/`
- `/arguments/`
- `/structure/`
- `/volumes/volume-1/`
- `/volumes/volume-2/`
- `/volumes/volume-3/`
- `/diagrams/`
- `/timeline/`
- `/downloads/`
- `/letter/`
- `/author-submissions/`
- `/reader-feedback/`
- `/en/`
- `/es/`
- `/book/preface/`
- `/book/volume-1/chapter-1/`
- `/book/volume-2/chapter-1/`
- `/book/volume-3/chapter-1/`

## Deployment

The repository includes static deployment configuration for:

- GitHub Pages: `.github/workflows/deploy-github-pages.yml`
- Cloudflare Pages: `wrangler.toml`
- Vercel: `vercel.json`
- Netlify: `netlify.toml`

Cloudflare Pages, Vercel, and Netlify should use `npm run build` and publish the generated `dist/` directory.

### GitHub Pages

1. Push the repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** source to **GitHub Actions**.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the Actions tab.

The workflow uses `actions/configure-pages` to pass the correct GitHub Pages origin and base path into Astro at build time. This supports project-page URLs such as:

```text
https://username.github.io/repository-name/
```

The generated site uses the repository base path for internal links and static assets, including:

```text
/downloads/huaxia-yimin.pdf
/downloads/huaxia-yimin.docx
```

For custom domains or unusual Pages setups, repository variables can override the defaults:

- `SITE_URL`, for example `https://username.github.io`
- `BASE_PATH`, for example `/repository-name`

The default project domain in `astro.config.mjs` is currently:

```text
https://huaxia-yimin.pages.dev
```

Change `SITE_URL` in deployment settings when the final domain is chosen.

## Contact and Submissions

- Publication contact: `yc114de@gmail.com`
- Author media submission page: `/author-submissions/`
- Reader feedback page: `/reader-feedback/`

The site is static. Author videos, images, and supplemental chapter materials should be sent by email or cloud-drive link, then reviewed and placed under `public/media/` before being linked from pages.
