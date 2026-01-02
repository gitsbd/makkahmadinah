#!/bin/bash

# GitHub Pages Deployment Script
# This script helps you deploy the website to GitHub Pages

echo "🕋 Umrah & Hajj Guide - GitHub Pages Deployment"
echo "================================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check if remote exists
if ! git remote | grep -q "^origin$"; then
    echo ""
    echo "⚠️  No remote repository found!"
    echo ""
    read -p "Enter your GitHub username: " username
    echo ""
    echo "Adding remote repository..."
    git remote add origin https://github.com/${username}/makkahmadinah.git
    echo "✅ Remote added: https://github.com/${username}/makkahmadinah.git"
    echo ""
fi

# Show current status
echo "📊 Current git status:"
git status
echo ""

# Ask if user wants to proceed
read -p "Do you want to add all files and commit? (y/n): " proceed

if [ "$proceed" != "y" ] && [ "$proceed" != "Y" ]; then
    echo "❌ Deployment cancelled."
    exit 0
fi

# Add all files
echo ""
echo "➕ Adding all files..."
git add .

# Commit
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update: Umrah & Hajj Guide Website"
fi

echo ""
echo "💾 Committing changes..."
git commit -m "$commit_msg"

# Check current branch
current_branch=$(git branch --show-current)
if [ -z "$current_branch" ]; then
    echo ""
    echo "🌿 Creating main branch..."
    git branch -M main
    current_branch="main"
fi

# Push
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin $current_branch

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Go to your GitHub repository: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^.]*\).*/\1\/\2/')"
echo "2. Go to Settings > Pages"
echo "3. Select 'Deploy from a branch' or 'GitHub Actions'"
echo "4. Your website will be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^.]*\).*/\1/').github.io/makkahmadinah/"
echo ""
echo "🎉 Happy coding!"

