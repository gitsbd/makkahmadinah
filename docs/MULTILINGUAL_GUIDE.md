# Multilingual Support Guide

## Overview
This website now supports 3 languages:
- **Bengali (বাংলা)** - Default language
- **English** - Full support
- **Arabic (العربية)** - Full support

## How It Works

### 1. Translation System (`translations.js`)
All translations are stored in a centralized JavaScript object with the structure:
```javascript
translations = {
    bn: { ... },  // Bengali translations
    en: { ... },  // English translations
    ar: { ... }   // Arabic translations
}
```

### 2. Language Switching
- Users can switch languages using the language selector button in the header
- Selected language is saved in `localStorage` and persists across pages
- The system automatically updates:
  - HTML `lang` and `dir` attributes
  - Font family (Bengali/Arabic fonts for RTL languages)
  - All text content with `data-i18n` attributes

### 3. Adding Translations to HTML

#### Basic Text Translation
```html
<h1 data-i18n="home.title">Default Bengali Text</h1>
```

#### Navigation Links
```html
<a href="umrah.html" data-i18n="nav.umrah">উমরাহ</a>
```

#### HTML Content (with formatting)
```html
<div data-i18n-html="home.description">Default content</div>
```

## Current Implementation Status

### ✅ Completed
- Core translation system infrastructure
- Language selector UI component
- Homepage (`index.html`) - Navigation and hero section
- Common elements (footer, site title)
- Language persistence (localStorage)
- RTL/LTR direction switching
- Font family switching

### 🔄 In Progress
- Other HTML pages need `data-i18n` attributes added
- More translation keys need to be added to `translations.js`

### 📝 To Do
1. Add `data-i18n` attributes to all pages:
   - `umrah.html`
   - `hajj.html`
   - `duas.html`
   - `daily-duas.html`
   - `guide.html`
   - `makkah.html`
   - `madinah.html`

2. Expand `translations.js` with content for:
   - Umrah process steps
   - Hajj process steps
   - Duas and Surahs
   - History content
   - Guide content

## Adding New Translations

### Step 1: Add to translations.js
```javascript
translations.bn.yourSection = {
    key1: "Bengali text",
    key2: "More Bengali text"
};

translations.en.yourSection = {
    key1: "English text",
    key2: "More English text"
};

translations.ar.yourSection = {
    key1: "Arabic text",
    key2: "More Arabic text"
};
```

### Step 2: Add data-i18n to HTML
```html
<h2 data-i18n="yourSection.key1">Default Text</h2>
<p data-i18n="yourSection.key2">Default Paragraph</p>
```

## Language Selector Usage

The language selector appears in the header. Users can:
1. Click the language button to see available languages
2. Select a language (Bengali, English, or Arabic)
3. The page automatically updates
4. Selection is saved for future visits

## Technical Details

### File Structure
- `translations.js` - All translation data
- `script.js` - Language switching logic
- HTML files - Content with `data-i18n` attributes

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses localStorage for language persistence

## Notes
- Arabic and Bengali use RTL (right-to-left) direction
- English uses LTR (left-to-right) direction
- Font families automatically switch based on language
- The system gracefully falls back to the key name if translation is missing

