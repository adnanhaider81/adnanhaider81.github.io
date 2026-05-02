# GitHub Pages Deployment

This folder is ready to publish as a free GitHub Pages website.

## Recommended URL

Best option: create a GitHub repository named:

```text
adnanhaider81.github.io
```

When the contents of this `blogs` folder are placed at the root of that repository, the website will publish at:

```text
https://adnanhaider81.github.io
```

That is the cleanest URL for a CV, PhD application, LinkedIn profile, GitHub profile, email signature, and grant/training applications.

## Publish From GitHub Website

1. Go to GitHub and create a new public repository named `adnanhaider81.github.io`.
2. Upload all files from this `blogs` folder into the repository root.
3. Make sure `index.html`, `styles.css`, `script.js`, `.nojekyll`, `assets/`, and `posts/` are at the top level of the repository.
4. Open repository `Settings`.
5. Go to `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select branch `main` and folder `/root`.
8. Save and wait for GitHub Pages to finish deployment.

## Publish From Terminal

Run this from inside the `blogs` folder after creating the GitHub repository:

```bash
git init
git add .
git commit -m "Publish research blog portfolio"
git branch -M main
git remote add origin https://github.com/adnanhaider81/adnanhaider81.github.io.git
git push -u origin main
```

Then enable GitHub Pages in repository settings if it is not enabled automatically.

## Alternative Project URL

If you publish this inside a repository named `blogs`, the public URL will usually be:

```text
https://adnanhaider81.github.io/blogs/
```

This works, but the personal site URL is cleaner:

```text
https://adnanhaider81.github.io
```

## Why `.nojekyll` Is Included

GitHub Pages can use Jekyll by default for branch-based publishing. This site is plain HTML, CSS, JavaScript, and image assets, so `.nojekyll` tells GitHub Pages to serve the files directly.

