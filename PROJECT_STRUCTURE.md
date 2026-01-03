# Project Structure Documentation

This document explains the organization and structure of the Makkah Madinah project.

## Directory Overview

### `/src` - Source Files
All source code and content files are organized here.

#### `/src/pages` - HTML Pages
Contains all HTML page files:
- `index.html` - Homepage
- `umrah.html` - Umrah guide
- `hajj.html` - Hajj guide
- `duas.html` - Important duas and surahs
- `daily-duas.html` - Daily duas collection
- `general-duas.html` - General duas
- `guide.html` - Complete guide
- `makkah.html` - Makkah history
- `madinah.html` - Madinah history
- `makkah-places.html` - Makkah landmarks
- `madinah-places.html` - Madinah landmarks

#### `/src/styles` - Stylesheets
CSS files for styling:
- `styles.css` - Main stylesheet

#### `/src/scripts` - JavaScript Files
Client-side JavaScript:
- `script.js` - Main JavaScript functionality (language switching, navigation, etc.)

#### `/src/locales` - Translation Files
Internationalization files:
- `translations.js` - Multi-language translations (Bengali, English, Arabic)

### `/public` - Static Assets
Files that are copied as-is to the build output.

#### `/public/assets/images` - Image Assets
All image files used in the website:
- `kaabaSharif.jpeg` - Kaaba image
- Other images...

### `/docs` - Documentation
Project documentation files:
- `DEPLOYMENT.md` - Deployment guide
- `DEVELOPMENT.md` - Development guide
- `MULTILINGUAL_GUIDE.md` - Multilingual system guide
- `QUICK_START.md` - Quick start guide
- `SSH_SETUP.md` - SSH setup guide

### `/.github` - GitHub Configuration
- `/workflows` - GitHub Actions workflows
  - `deploy.yml` - Automatic deployment to GitHub Pages

### Root Files
- `package.json` - npm configuration and dependencies
- `vite.config.js` - Vite build configuration
- `.editorconfig` - Editor configuration
- `.prettierrc` - Prettier code formatting rules
- `.gitignore` - Git ignore rules
- `README.md` - Main project documentation
- `CONTRIBUTING.md` - Contribution guidelines

## File Path Conventions

### HTML Files
- Use relative paths for same-directory references
- Use absolute paths starting with `/` for cross-page navigation
- Example: `href="/umrah.html"` (not `href="umrah.html"`)

### CSS Files
- Reference: `/src/styles/styles.css`
- Use CSS variables defined in `styles.css`

### JavaScript Files
- Reference: `/src/scripts/script.js`
- Translations: `/src/locales/translations.js`

### Images
- Reference: `/public/assets/images/filename.jpg`
- Use descriptive filenames
- Optimize images before adding

## Build Process

1. **Development**: `npm run dev`
   - Serves files from `src/` and `public/`
   - Hot Module Replacement (HMR) enabled
   - Runs on `http://localhost:3000`

2. **Production Build**: `npm run build`
   - Processes all files from `src/`
   - Copies `public/` assets
   - Outputs optimized files to `dist/`

3. **Deployment**: Automatic via GitHub Actions
   - Builds on push to `main`/`master`
   - Deploys `dist/` to GitHub Pages

## Adding New Files

### Adding a New Page
1. Create HTML file in `src/pages/`
2. Add entry in `vite.config.js` rollupOptions.input
3. Update navigation in all pages
4. Add translations if needed

### Adding New Styles
1. Add CSS to `src/styles/styles.css` or create new file
2. Import in HTML: `<link rel="stylesheet" href="/src/styles/filename.css">`

### Adding New Scripts
1. Add JS file to `src/scripts/`
2. Reference in HTML: `<script src="/src/scripts/filename.js"></script>`

### Adding Images
1. Place image in `public/assets/images/`
2. Reference: `<img src="/public/assets/images/filename.jpg">`

## Best Practices

1. **File Naming**: Use kebab-case for files (e.g., `daily-duas.html`)
2. **Code Organization**: Keep related code together
3. **Comments**: Add comments for complex logic
4. **Consistency**: Follow existing patterns
5. **Testing**: Test locally before committing
6. **Formatting**: Run `npm run format` before committing

## Path Aliases (Vite)

For future use, these aliases are configured:
- `@` → `src/`
- `@styles` → `src/styles/`
- `@scripts` → `src/scripts/`
- `@locales` → `src/locales/`
- `@assets` → `public/assets/`

