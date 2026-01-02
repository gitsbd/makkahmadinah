# 🚀 Quick Start Guide - GitHub Pages Deployment

## Simple 3-Step Deployment

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `makkahmadinah`
3. Make it **Public**
4. Click **Create repository**

### Step 2: Push Your Code

**Option A: Using the deployment script (Easiest)**
```bash
./deploy.sh
```

**Option B: Manual commands**
```bash
git init
git add .
git commit -m "Initial commit: Umrah & Hajj Guide"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/makkahmadinah.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Wait 2-3 minutes
5. Your site will be live at: `https://YOUR_USERNAME.github.io/makkahmadinah/`

## ✅ That's it!

Your website is now live on GitHub Pages!

## 📝 Making Updates

After making changes:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

GitHub will automatically redeploy your site!

## 🆘 Need Help?

See `DEPLOYMENT.md` for detailed instructions.

