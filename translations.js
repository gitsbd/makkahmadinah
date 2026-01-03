// Translations for Umrah & Hajj Guide Website
// Supports: Bengali (bn), English (en), Arabic (ar)

const translations = {
    bn: {
        // Navigation
        nav: {
            home: "হোম",
            pilgrimageServices: "তীর্থযাত্রা পরিষেবা",
            umrah: "উমরাহ",
            hajj: "হজ্জ",
            duas: "দোয়া ও সূরা",
            importantDuas: "উমরাহ ও হজ্জ দোয়া",
            dailyDuas: "দৈনিক দোয়া",
            history: "ইতিহাস",
            makkah: "মক্কা (Makkah)",
            madinah: "মদিনা (Madinah)",
            guide: "গাইড"
        },
        // Common
        common: {
            siteTitle: "উমরাহ ও হজ্জ",
            siteSubtitle: "Umrah & Hajj Guide",
            forBangladeshiMuslims: "বাংলাদেশী মুসলমানদের জন্য",
            educationalPurpose: "এই ওয়েবসাইটটি শিক্ষামূলক উদ্দেশ্যে তৈরি করা হয়েছে"
        },
        // Homepage
        home: {
            title: "উমরাহ ও হজ্জ গাইড",
            subtitle: "বাংলাদেশী মুসলমানদের জন্য সম্পূর্ণ নির্দেশিকা",
            getStarted: "শুরু করুন",
            learnMore: "আরও জানুন",
            umrahGuide: "উমরাহ গাইড",
            umrahDesc: "ধাপে ধাপে উমরাহ সম্পাদনের সম্পূর্ণ নির্দেশিকা",
            hajjGuide: "হজ্জ গাইড",
            hajjDesc: "দিনে দিনে হজ্জ সম্পাদনের বিস্তারিত প্রক্রিয়া",
            duasGuide: "দোয়া ও সূরা",
            duasDesc: "সমস্ত প্রয়োজনীয় দোয়া, সূরা এবং বাংলা অনুবাদ",
            fullGuide: "সম্পূর্ণ গাইড",
            fullGuideDesc: "প্রস্তুতি থেকে শুরু করে সবকিছু",
            dailyDuas: "দৈনিক দোয়া",
            dailyDuasDesc: "প্রতিদিন পড়ার জন্য গুরুত্বপূর্ণ দোয়া"
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            pilgrimageServices: "Pilgrimage Services",
            umrah: "Umrah",
            hajj: "Hajj",
            duas: "Duas & Surahs",
            importantDuas: "Important Duas & Surahs",
            dailyDuas: "Daily Duas",
            history: "History",
            makkah: "Makkah",
            madinah: "Madinah",
            guide: "Guide"
        },
        // Common
        common: {
            siteTitle: "Umrah & Hajj",
            siteSubtitle: "Umrah & Hajj Guide",
            forBangladeshiMuslims: "For Bangladeshi Muslims",
            educationalPurpose: "This website is created for educational purposes"
        },
        // Homepage
        home: {
            title: "Umrah & Hajj Guide",
            subtitle: "Complete guide for Bangladeshi Muslims",
            getStarted: "Get Started",
            learnMore: "Learn More",
            umrahGuide: "Umrah Guide",
            umrahDesc: "Step-by-step complete guide to performing Umrah",
            hajjGuide: "Hajj Guide",
            hajjDesc: "Day-by-day detailed process of performing Hajj",
            duasGuide: "Duas & Surahs",
            duasDesc: "All necessary duas, surahs and translations",
            fullGuide: "Complete Guide",
            fullGuideDesc: "Everything from preparation onwards",
            dailyDuas: "Daily Duas",
            dailyDuasDesc: "Important duas for daily recitation"
        }
    },
    ar: {
        // Navigation
        nav: {
            home: "الرئيسية",
            pilgrimageServices: "خدمات الحج والعمرة",
            umrah: "العمرة",
            hajj: "الحج",
            duas: "الأدعية والسور",
            importantDuas: "الأدعية والسور المهمة",
            dailyDuas: "الأدعية اليومية",
            history: "التاريخ",
            makkah: "مكة المكرمة",
            madinah: "المدينة المنورة",
            guide: "الدليل"
        },
        // Common
        common: {
            siteTitle: "العمرة والحج",
            siteSubtitle: "دليل العمرة والحج",
            forBangladeshiMuslims: "للمسلمين البنغلاديشيين",
            educationalPurpose: "تم إنشاء هذا الموقع لأغراض تعليمية"
        },
        // Homepage
        home: {
            title: "دليل العمرة والحج",
            subtitle: "دليل شامل للمسلمين البنغلاديشيين",
            getStarted: "ابدأ",
            learnMore: "اعرف المزيد",
            umrahGuide: "دليل العمرة",
            umrahDesc: "دليل شامل خطوة بخطوة لأداء العمرة",
            hajjGuide: "دليل الحج",
            hajjDesc: "عملية مفصلة يوم بيوم لأداء الحج",
            duasGuide: "الأدعية والسور",
            duasDesc: "جميع الأدعية والسور والترجمات الضرورية",
            fullGuide: "الدليل الكامل",
            fullGuideDesc: "كل شيء من التحضير فصاعداً",
            dailyDuas: "الأدعية اليومية",
            dailyDuasDesc: "أدعية مهمة للتلاوة اليومية"
        }
    }
};

// Language detection and storage - Default to Bengali (bn)
let currentLang = localStorage.getItem('language') || 'bn';

// Ensure Bengali is the default if no language preference exists
if (!localStorage.getItem('language')) {
    currentLang = 'bn';
    localStorage.setItem('language', 'bn');
}

// Function to get translation
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

// Function to update page language
function updatePageLanguage() {
    // Update HTML lang and dir attributes
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.fontFamily = "'Noto Sans Arabic', 'Arial', sans-serif";
    } else if (currentLang === 'bn') {
        document.documentElement.dir = 'rtl';
        document.body.style.fontFamily = "'Noto Sans Bengali', 'Arial', sans-serif";
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.fontFamily = "'Arial', sans-serif";
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'TITLE') {
                document.title = translation + ' - Umrah & Hajj Guide';
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update all elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        const translation = t(key);
        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Update language selector button
    const langButton = document.querySelector('.lang-toggle');
    if (langButton) {
        const langNames = { bn: 'বাংলা', en: 'English', ar: 'العربية' };
        langButton.textContent = langNames[currentLang];
    }

    // Update active language in menu
    document.querySelectorAll('.lang-menu a').forEach(link => {
        link.classList.remove('active');
        const lang = link.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
        if (lang === currentLang) {
            link.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
});

