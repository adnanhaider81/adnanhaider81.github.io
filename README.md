# Syed Adnan Haider Blog Site

This is a free static blog and portfolio site for pathogen genomics, wastewater/environmental surveillance, tutorials, 13 GitHub pipelines, long-form referenced articles, and a clear applied research record.

## Files

- `index.html` - page structure
- `styles.css` - visual design and responsive layout
- `script.js` - blog post data, references, GitHub pipeline cards, run tutorials, filters, search, and reader view
- `assets/genomics-hero.png` - generated hero image used by the homepage
- `posts/` - draft space for future writing
- `.nojekyll` - tells GitHub Pages to serve this as a plain static site
- `GITHUB_PAGES_DEPLOYMENT.md` - step-by-step GitHub Pages publishing instructions
- `PROFILE_LINKS.md` - CV, LinkedIn, GitHub, email, and application snippets

## Add or edit posts

Open `script.js` and edit the `posts` array. Copy an existing post object, then change:

- `title`
- `slug`
- `category`
- `date`
- `minutes`
- `tags`
- `summary`
- `body`
- `references`

Keep each `slug` lowercase, unique, and hyphenated.

## Add or edit pipeline tutorials

Open `script.js` and edit the `pipelines` array. Each card supports:

- repository URL
- last-updated date
- practical purpose
- prerequisites
- step-by-step run commands
- output files to inspect

Use real repository dates and real commands whenever possible. This keeps the portfolio credible for collaborators, mentors, and technical readers.

For each pipeline, keep the scientific question, method notes, quality checks, interpretation notes, commands, and expected outputs specific to that repository.

The pipeline section is grouped in this order: polio workflows first, manuscript workflows second, and other repositories third.

## Free publishing options

Best fit for this version: GitHub Pages.

1. Create a GitHub repository, for example `adnanhaider81.github.io`.
2. Upload the contents of this `blogs` folder to that repository.
3. In the repository, go to Settings -> Pages.
4. Select Deploy from branch, choose `main`, and choose the root folder.
5. Your site will publish at `https://adnanhaider81.github.io`.

Also good:

- Cloudflare Pages if you want to keep the GitHub repository private on a free hosting workflow.
- Netlify if you want a very simple drag-and-drop or Git-connected deployment.
- Vercel if you later move to Next.js or another React-based framework for a larger portfolio.

## Optional upgrades

- Add a custom domain such as `adnanhaider.com`.
- Move posts to Markdown using Astro, Eleventy, Hugo, or Jekyll when the archive grows.
- Add privacy-friendly analytics such as Cloudflare Web Analytics.
- Add a downloadable CV link once the final public CV file is ready.
