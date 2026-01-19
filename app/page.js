'use client'

import Link from 'next/link'
import ImageContainer from '@/components/ImageContainer'
import AudioPlayer from '@/components/AudioPlayer'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            বাংলাদেশী মুসলমানদের জন্য উমরাহ ও হজ্জ গাইড (دليل العمرة والحج للمسلمين البنغلاديشيين)
            <AudioPlayer arabicText="دليل العمرة والحج للمسلمين البنغلاديشيين" className="alphabet-audio-btn" tone="default" />
          </h1>
          <p className="hero-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            সম্পূর্ণ প্রক্রিয়া, দোয়া ও সূরা সহ বিস্তারিত নির্দেশিকা (دليل شامل مع العملية الكاملة والدعاء والسور)
            <AudioPlayer arabicText="دليل شامل مع العملية الكاملة والدعاء والسور" className="alphabet-audio-btn" tone="default" />
          </p>
          <div className="hero-buttons">
            <Link href="/umrah/" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              উমরাহ শুরু করুন (ابدأ العمرة)
              <AudioPlayer arabicText="ابدأ العمرة" className="alphabet-audio-btn" tone="default" />
            </Link>
            <Link href="/hajj/" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              হজ্জ শুরু করুন (ابدأ الحج)
              <AudioPlayer arabicText="ابدأ الحج" className="alphabet-audio-btn" tone="default" />
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🕋</div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                উমরাহ গাইড (دليل العمرة)
                <AudioPlayer arabicText="دليل العمرة" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ধাপে ধাপে উমرাহ সম্পাদনের সম্পূর্ণ নির্দেশিকা (دليل كامل لأداء العمرة خطوة بخطوة)
                <AudioPlayer arabicText="دليل كامل لأداء العمرة خطوة بخطوة" className="alphabet-audio-btn" tone="default" />
              </p>
              <ImageContainer 
                src="/assets/images/madinaprophet.JPG" 
                alt="মদিনা শরীফ" 
                variant="card"
              />
              <Link href="/umrah/" className="feature-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                শিখুন (تعلم) →
                <AudioPlayer arabicText="تعلم" className="alphabet-audio-btn" tone="default" />
              </Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🕌</div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                হজ্জ গাইড (دليل الحج)
                <AudioPlayer arabicText="دليل الحج" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                দিনে দিনে হজ্জ সম্পাদনের বিস্তারিত প্রক্রিয়া (عملية مفصلة لأداء الحج يوماً بيوم)
                <AudioPlayer arabicText="عملية مفصلة لأداء الحج يوماً بيوم" className="alphabet-audio-btn" tone="default" />
              </p>
              <ImageContainer 
                src="/assets/images/kaabaSharif.jpeg" 
                alt="কাবা শরীফ" 
                variant="card"
              />
              <Link href="/hajj/" className="feature-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                শিখুন (تعلم) →
                <AudioPlayer arabicText="تعلم" className="alphabet-audio-btn" tone="default" />
              </Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📿</div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                দোয়া ও সূরা (الدعاء والسور)
                <AudioPlayer arabicText="الدعاء والسور" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                সমস্ত প্রয়োজনীয় দোয়া, সূরা এবং বাংলা অনুবাদ (جميع الأدعية والسور الضرورية مع الترجمة البنغالية)
                <AudioPlayer arabicText="جميع الأدعية والسور الضرورية مع الترجمة البنغالية" className="alphabet-audio-btn" tone="default" />
              </p>
              <ImageContainer 
                src="/assets/images/dua.jpeg" 
                alt="দোয়া ও সূরা" 
                variant="card"
              />
              <Link href="/duas/" className="feature-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                দেখুন (شاهد) →
                <AudioPlayer arabicText="شاهد" className="alphabet-audio-btn" tone="default" />
              </Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                সম্পূর্ণ গাইড (الدليل الكامل)
                <AudioPlayer arabicText="الدليل الكامل" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                প্রস্তুতি থেকে শুরু করে সবকিছু (كل شيء من التحضير فصاعداً)
                <AudioPlayer arabicText="كل شيء من التحضير فصاعداً" className="alphabet-audio-btn" tone="default" />
              </p>
              <Link href="/guide/" className="feature-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                পড়ুন (اقرأ) →
                <AudioPlayer arabicText="اقرأ" className="alphabet-audio-btn" tone="default" />
              </Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌅</div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                দৈনিক দোয়া (الأدعية اليومية)
                <AudioPlayer arabicText="الأدعية اليومية" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                প্রতিদিন পড়ার জন্য গুরুত্বপূর্ণ দোয়া (أدعية مهمة للقراءة اليومية)
                <AudioPlayer arabicText="أدعية مهمة للقراءة اليومية" className="alphabet-audio-btn" tone="default" />
              </p>
              <Link href="/daily-duas/" className="feature-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                দেখুন (شاهد) →
                <AudioPlayer arabicText="شاهد" className="alphabet-audio-btn" tone="default" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            কেন এই ওয়েবসাইট? (لماذا هذا الموقع؟)
            <AudioPlayer arabicText="لماذا هذا الموقع؟" className="alphabet-audio-btn" tone="default" />
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                ✅ সম্পূর্ণ বাংলা (بالكامل بالبنغالية)
                <AudioPlayer arabicText="بالكامل بالبنغالية" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                সমস্ত তথ্য বাংলা ভাষায় সহজে বোঝার জন্য (جميع المعلومات باللغة البنغالية للفهم السهل)
                <AudioPlayer arabicText="جميع المعلومات باللغة البنغالية للفهم السهل" className="alphabet-audio-btn" tone="default" />
              </p>
            </div>
            <div className="info-item">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                📱 মোবাইল ফ্রেন্ডলি (صديق للجوال)
                <AudioPlayer arabicText="صديق للجوال" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                যেকোনো ডিভাইসে ব্যবহার করা যায় (يمكن استخدامه على أي جهاز)
                <AudioPlayer arabicText="يمكن استخدامه على أي جهاز" className="alphabet-audio-btn" tone="default" />
              </p>
            </div>
            <div className="info-item">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                🎯 ধাপে ধাপে (خطوة بخطوة)
                <AudioPlayer arabicText="خطوة بخطوة" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                সহজ নির্দেশনা সহ সম্পূর্ণ প্রক্রিয়া (العملية الكاملة مع تعليمات سهلة)
                <AudioPlayer arabicText="العملية الكاملة مع تعليمات سهلة" className="alphabet-audio-btn" tone="default" />
              </p>
            </div>
            <div className="info-item">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                📚 সম্পূর্ণ তথ্য (معلومات كاملة)
                <AudioPlayer arabicText="معلومات كاملة" className="alphabet-audio-btn" tone="default" />
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                সমস্ত দোয়া, সূরা এবং প্রয়োজনীয় তথ্য (جميع الأدعية والسور والمعلومات الضرورية)
                <AudioPlayer arabicText="جميع الأدعية والسور والمعلومات الضرورية" className="alphabet-audio-btn" tone="default" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

