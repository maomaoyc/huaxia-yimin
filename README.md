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
- Cloudflare Pages Functions: `functions/api/`
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

Replace or revise the body text in `src/content/book/` when chapters are corrected from the manuscript. The public pages intentionally present strong historical-political claims as the author's thesis or argument.

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

## Online Reading and Comments

Each chapter page is generated from `src/content/book/**/*.md` and includes chapter metadata, full text, previous/next navigation, download buttons, a desktop table of contents, a mobile table of contents, reading progress, and light/dark reading mode.

Chapter comments and annotations do not write to GitHub. By default, comments and highlights are saved in the visitor's browser. On Cloudflare Pages, bind a KV namespace named `COMMENTS_KV` to make chapter comments shared publicly through `functions/api/comments.ts`.

Reader registration, reader feedback, chapter comments, and author upload forms use Cloudflare Pages Functions. They do not write visitor information to GitHub. To email submissions to `yc114de@gmail.com`, configure an environment variable in Cloudflare Pages:

```text
RESEND_API_KEY=...
```

If the email service is not configured, the site still accepts the form request and reports whether the backend email was sent in the JSON response. Configure `RESEND_API_KEY` before relying on public submissions.

## Routes

- `/`
- `/introduction/`
- `/author/`
- `/arguments/`
- `/volumes/volume-1/`
- `/volumes/volume-2/`
- `/volumes/volume-3/`
- `/timeline/`
- `/downloads/`
- `/letter/` 后记
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
- Cloudflare Pages via GitHub Actions: `.github/workflows/deploy-cloudflare-pages.yml`
- Cloudflare Pages: `wrangler.toml`
- Vercel: `vercel.json`
- Netlify: `netlify.toml`

Cloudflare Pages, Vercel, and Netlify should use `npm run build` and publish the generated `dist/` directory. Cloudflare Pages will also deploy the functions under `functions/api/`.

### Cloudflare Pages

The repository includes a GitHub Actions workflow that can deploy to Cloudflare Pages after every push to `main`. This bypasses any broken Cloudflare-GitHub connection inside the Cloudflare dashboard.

Add these GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Optional GitHub repository variable:

- `CLOUDFLARE_PAGES_PROJECT`, default: `huaxia-yimin`

Recommended API token permissions:

- Account: Cloudflare Pages Edit
- Account: Account Settings Read
- Zone: DNS Read, only if custom-domain verification or DNS automation is needed

After the secrets are set, open **Actions** in GitHub and run **Deploy to Cloudflare Pages**, or push any new commit to `main`. The public custom domain should then serve the newly built site:

```text
https://huaxiayimin.us/
https://www.huaxiayimin.us/
```

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

Set `SITE_URL=https://huaxiayimin.us` in deployment settings for the custom domain. For GitHub Pages project deployment, set `BASE_PATH=/repository-name`; for Cloudflare Pages custom-domain deployment, keep `BASE_PATH=/`.

## Contact and Submissions

- Publication contact: `yc114de@gmail.com`
- Author latest article/video upload entry: `/letter/`
- Reader feedback page: `/reader-feedback/`

Author videos, images, and supplemental chapter materials can be submitted by cloud-drive link or file name through the 后记 page. Large media files should still be reviewed and placed under `public/media/` before being linked from public pages.
