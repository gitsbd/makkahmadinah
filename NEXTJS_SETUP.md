# Next.js Setup Guide

এই প্রজেক্টটি এখন **Next.js + React** ব্যবহার করছে!

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

ওয়েবসাইটটি `http://localhost:3000` এ খুলবে।

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
makkahmadinah/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── umrah/            # Umrah page
│   ├── hajj/             # Hajj page
│   ├── duas/             # Duas page
│   ├── daily-duas/       # Daily duas page
│   └── ...               # Other pages
├── components/           # React components
│   ├── Header.js
│   ├── Footer.js
│   └── DuaCategory.js
├── public/               # Static assets
│   └── assets/
│       └── images/
├── next.config.js        # Next.js configuration
└── package.json
```

## ✨ Features

- ✅ **Automatic Routing** - Pages automatically become routes
- ✅ **Component-based** - Reusable React components
- ✅ **Fast Development** - Hot reload on file changes
- ✅ **Optimized Build** - Production-ready optimized code
- ✅ **SEO Friendly** - Server-side rendering support

## 🔄 Migration from HTML

পুরানো HTML pages এখন React components এ convert করা হয়েছে:

- `src/pages/index.html` → `app/page.js`
- `src/pages/umrah.html` → `app/umrah/page.js`
- `src/pages/daily-duas.html` → `app/daily-duas/page.js`
- ইত্যাদি...

## 📝 Notes

- সব pages `app/` directory তে আছে
- CSS `app/globals.css` এ আছে
- Components `components/` directory তে আছে
- Images `public/assets/images/` এ আছে

## 🐛 Troubleshooting

### Port already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module not found errors?
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

