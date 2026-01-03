# GitHub Pages Deployment Guide

## Quick Start

This website is ready to be deployed on GitHub Pages. Follow these steps:

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository name: `makkahmadinah`
5. Description: "Umrah & Hajj Guide for Bangladeshi Muslims"
6. Set visibility to **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **Create repository**

## Step 2: Push Code to GitHub

Open terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Umrah & Hajj Guide Website"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/makkahmadinah.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

### Method 1: Using GitHub Actions (Recommended - Already Configured)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically deploy your site.

1. Go to your repository on GitHub
2. Click **Settings**
3. Go to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### Method 2: Using Default GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Go to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Branch: **main** (or **master**), folder: **/ (root)**
6. Click **Save**

## Step 4: Access Your Website

After a few minutes, your website will be available at:
```
https://YOUR_USERNAME.github.io/makkahmadinah/
```

## Updating Your Website

To update your website:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Update: Description of your changes"
git push origin main
```

GitHub will automatically rebuild and deploy your site within a few minutes.

## Troubleshooting

### Website not loading?
- Wait 5-10 minutes after first deployment
- Check repository Settings > Pages to ensure it's enabled
- Verify the branch name is correct (main or master)
- Check Actions tab for any deployment errors

### Changes not showing?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub to rebuild
- Check GitHub Actions for deployment status

### 404 Error?
- Make sure `index.html` is in the root directory
- Verify file names match exactly (case-sensitive)
- Check that all HTML files are committed and pushed

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the root directory with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Support

For issues or questions:
- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Open an issue in the repository

