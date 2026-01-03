# Contributing Guide

Thank you for your interest in contributing to the Umrah & Hajj Guide project!

## Getting Started

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/makkahmadinah.git
   cd makkahmadinah
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Project Structure

```
makkahmadinah/
├── src/
│   ├── pages/          # HTML pages
│   ├── styles/         # CSS files
│   ├── scripts/        # JavaScript files
│   └── locales/        # Translation files
├── public/
│   └── assets/
│       └── images/     # Image assets
├── docs/               # Documentation
├── .github/            # GitHub workflows and templates
└── dist/               # Build output (gitignored)
```

## Development Guidelines

### Code Style

- Use 4 spaces for indentation in HTML/CSS
- Use 2 spaces for JSON/YAML files
- Follow existing code patterns
- Run `npm run format` before committing

### Adding New Pages

1. Create HTML file in `src/pages/`
2. Add entry point in `vite.config.js`
3. Update navigation in all pages
4. Add translations in `src/locales/translations.js`

### Adding Translations

1. Edit `src/locales/translations.js`
2. Add keys for all three languages (bn, en, ar)
3. Use `data-i18n` attributes in HTML

### Commit Messages

Use clear, descriptive commit messages:
- `feat: Add new dua section`
- `fix: Correct translation error`
- `docs: Update README`
- `style: Format code with prettier`

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally with `npm run dev`
4. Format code: `npm run format`
5. Commit: `git commit -m "feat: Description"`
6. Push: `git push origin feature/your-feature`
7. Create Pull Request on GitHub

## Code Review

- All PRs require review
- Address review comments promptly
- Keep PRs focused and small when possible

## Questions?

Open an issue on GitHub for any questions or discussions.

Thank you for contributing! 🙏

