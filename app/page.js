import Link from 'next/link'
import ImageContainer from '@/components/ImageContainer'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">বাংলাদেশী মুসলমানদের জন্য উমরাহ ও হজ্জ গাইড</h1>
          <p className="hero-subtitle">সম্পূর্ণ প্রক্রিয়া, দোয়া ও সূরা সহ বিস্তারিত নির্দেশিকা</p>
          <div className="hero-buttons">
            <Link href="/umrah/" className="btn btn-primary">উমরাহ শুরু করুন</Link>
            <Link href="/hajj/" className="btn btn-secondary">হজ্জ শুরু করুন</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🕋</div>
              <h3>উমরাহ গাইড</h3>
              <p>ধাপে ধাপে উমরাহ সম্পাদনের সম্পূর্ণ নির্দেশিকা</p>
              <ImageContainer 
                src="/assets/images/madinaprophet.JPG" 
                alt="মদিনা শরীফ" 
                variant="card"
              />
              <Link href="/umrah/" className="feature-link">শিখুন →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🕌</div>
              <h3>হজ্জ গাইড</h3>
              <p>দিনে দিনে হজ্জ সম্পাদনের বিস্তারিত প্রক্রিয়া</p>
              <ImageContainer 
                src="/assets/images/kaabaSharif.jpeg" 
                alt="কাবা শরীফ" 
                variant="card"
              />
              <Link href="/hajj/" className="feature-link">শিখুন →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📿</div>
              <h3>দোয়া ও সূরা</h3>
              <p>সমস্ত প্রয়োজনীয় দোয়া, সূরা এবং বাংলা অনুবাদ</p>
              <ImageContainer 
                src="/assets/images/dua.jpeg" 
                alt="দোয়া ও সূরা" 
                variant="card"
              />
              <Link href="/duas/" className="feature-link">দেখুন →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>সম্পূর্ণ গাইড</h3>
              <p>প্রস্তুতি থেকে শুরু করে সবকিছু</p>
              <Link href="/guide/" className="feature-link">পড়ুন →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌅</div>
              <h3>দৈনিক দোয়া</h3>
              <p>প্রতিদিন পড়ার জন্য গুরুত্বপূর্ণ দোয়া</p>
              <Link href="/daily-duas/" className="feature-link">দেখুন →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h2>কেন এই ওয়েবসাইট?</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>✅ সম্পূর্ণ বাংলা</h3>
              <p>সমস্ত তথ্য বাংলা ভাষায় সহজে বোঝার জন্য</p>
            </div>
            <div className="info-item">
              <h3>📱 মোবাইল ফ্রেন্ডলি</h3>
              <p>যেকোনো ডিভাইসে ব্যবহার করা যায়</p>
            </div>
            <div className="info-item">
              <h3>🎯 ধাপে ধাপে</h3>
              <p>সহজ নির্দেশনা সহ সম্পূর্ণ প্রক্রিয়া</p>
            </div>
            <div className="info-item">
              <h3>📚 সম্পূর্ণ তথ্য</h3>
              <p>সমস্ত দোয়া, সূরা এবং প্রয়োজনীয় তথ্য</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

