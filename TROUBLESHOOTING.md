# Troubleshooting Page Rendering Issues

## Common Issues and Solutions

### 1. Pages Not Rendering Properly

**Symptoms:**
- Blank pages
- No styles applied
- Content not showing

**Solutions:**

#### Check Browser Console
Open browser DevTools (F12) and check for errors:
- JavaScript errors
- CSS loading errors
- Network errors

#### Clear Cache and Restart
```bash
# Stop the server (Ctrl+C)
rm -rf .next
npm run dev
```

#### Check CSS Loading
Make sure `app/globals.css` exists and is imported in `app/layout.js`:
```javascript
import './globals.css'
```

### 2. Client Components Not Working

**Symptoms:**
- Dropdowns not opening/closing
- Interactive elements not responding

**Solutions:**

#### Make sure component has 'use client'
```javascript
'use client'
import { useState } from 'react'
```

#### Check if component is properly imported
```javascript
import DuaCategory from '@/components/DuaCategory'
```

### 3. Navigation Not Working

**Symptoms:**
- Links not navigating
- 404 errors on pages

**Solutions:**

#### Check route structure
- Pages should be in `app/[page-name]/page.js`
- Home page should be `app/page.js`

#### Check Link components
Use Next.js Link:
```javascript
import Link from 'next/link'
<Link href="/umrah">Umrah</Link>
```

### 4. Styles Not Applying

**Symptoms:**
- No colors
- No layout
- Plain text

**Solutions:**

#### Check CSS import
In `app/layout.js`:
```javascript
import './globals.css'
```

#### Check CSS file exists
```bash
ls -la app/globals.css
```

#### Check browser DevTools
- Inspect element
- Check if CSS classes are applied
- Check if CSS file is loaded in Network tab

### 5. Images Not Loading

**Symptoms:**
- Broken image icons
- Images not showing

**Solutions:**

#### Check image path
Images should be in `public/assets/images/`
```javascript
<img src="/assets/images/kaabaSharif.jpeg" alt="..." />
```

#### Check file exists
```bash
ls -la public/assets/images/
```

### 6. Fonts Not Loading

**Symptoms:**
- Default fonts showing
- Bengali text not rendering properly

**Solutions:**

#### Check font links in layout.js
```javascript
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700&family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
```

#### Check CSS font-family
```css
font-family: 'Noto Sans Bengali', 'Arial', sans-serif;
```

## Quick Diagnostic Commands

```bash
# Check if server is running
curl http://localhost:3000

# Check if CSS is loading
curl http://localhost:3000/_next/static/css/app/layout.css

# Check page structure
ls -la app/

# Check components
ls -la components/

# Clear cache
rm -rf .next

# Restart server
npm run dev
```

## Still Having Issues?

1. Check browser console for errors
2. Check terminal for build errors
3. Verify all files are saved
4. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Check if port 3000 is available

