# Development Guide

## 🚀 Local Development Setup

### Prerequisites
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/gitsbd/makkahmadinah.git
   cd makkahmadinah
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

**Features:**
- ⚡ Fast Hot Module Replacement (HMR)
- 🔄 Auto-reload on file changes
- 📱 Responsive design testing
- 🌐 Multi-language support testing

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Development Workflow

1. Make changes to HTML, CSS, or JavaScript files
2. The browser will automatically reload with your changes
3. Test your changes across different browsers
4. Commit and push when ready

## 📦 Building for Production

### Build Command

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

This serves the `dist` folder locally so you can test the production build.

## 🚢 Deployment

### Automatic Deployment (GitHub Pages)

The website is automatically deployed to GitHub Pages when you push to `main` or `master` branch.

**How it works:**
1. Push your changes to GitHub
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the project
   - Deploys to GitHub Pages
3. Your site is live at: `https://gitsbd.github.io/makkahmadinah/`

### Manual Deployment

If you want to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - Netlify: Drag and drop the `dist` folder
   - Vercel: Connect your GitHub repo
   - Any static hosting service

## 📁 Project Structure

```
makkahmadinah/
├── index.html              # Homepage
├── umrah.html              # Umrah guide
├── hajj.html               # Hajj guide
├── duas.html               # Duas & Surahs
├── daily-duas.html         # Daily duas collection
├── general-duas.html       # General duas
├── guide.html              # Complete guide
├── makkah.html             # Makkah history
├── madinah.html            # Madinah history
├── makkah-places.html      # Makkah landmarks
├── madinah-places.html     # Madinah landmarks
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── translations.js         # Multi-language translations
├── images/                 # Image assets
├── package.json            # npm configuration
├── vite.config.js          # Vite configuration
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions workflow
```

## 🛠️ Troubleshooting

### Port Already in Use

If port 3000 is already in use, Vite will automatically try the next available port.

To specify a different port:
```bash
npm run dev -- --port 3001
```

### Node Modules Issues

If you encounter issues with `node_modules`:

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

If build fails:
1. Check Node.js version: `node --version` (should be v18+)
2. Clear cache: `npm cache clean --force`
3. Reinstall: `rm -rf node_modules && npm install`

## 📝 Notes

- The development server uses Vite for fast HMR
- All HTML files are entry points
- CSS and JS files are automatically included
- Images in the `images/` folder are served from the public directory

