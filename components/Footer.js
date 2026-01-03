'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Pilgrimage Services */}
          <div className="footer-section">
            <h4 className="footer-heading">তীর্থযাত্রা পরিষেবা</h4>
            <ul className="footer-links">
              <li>
                <Link href="/guide/">সম্পূর্ণ গাইড</Link>
              </li>
              <li>
                <Link href="/umrah/">উমরাহ</Link>
              </li>
              <li>
                <Link href="/hajj/">হজ্জ</Link>
              </li>
            </ul>
          </div>

          {/* Duas & Surahs */}
          <div className="footer-section">
            <h4 className="footer-heading">দোয়া ও সূরা</h4>
            <ul className="footer-links">
              <li>
                <Link href="/duas/">উমরাহ ও হজ্জ দোয়া</Link>
              </li>
              <li>
                <Link href="/umrah-duas/">উমরাহ দোয়া</Link>
              </li>
              <li>
                <Link href="/daily-duas/">দৈনিক দোয়া</Link>
              </li>
              <li>
                <Link href="/general-duas/">সাধারণ দোয়া</Link>
              </li>
            </ul>
          </div>

          {/* History & Places */}
          <div className="footer-section">
            <h4 className="footer-heading">ইতিহাস ও স্থান</h4>
            <ul className="footer-links">
              <li>
                <Link href="/makkah/">মক্কার ইতিহাস</Link>
              </li>
              <li>
                <Link href="/madinah/">মদিনার ইতিহাস</Link>
              </li>
              <li>
                <Link href="/makkah-places/">মক্কা দর্শনীয় স্থান</Link>
              </li>
              <li>
                <Link href="/madinah-places/">মদিনা দর্শনীয় স্থান</Link>
              </li>
            </ul>
          </div>

          {/* Islamic Library */}
          <div className="footer-section">
            <h4 className="footer-heading">ইসলামী লাইব্রেরি</h4>
            <ul className="footer-links">
              <li>
                <Link href="/quran/">কুরআন (Qur'an)</Link>
              </li>
              <li>
                <Link href="/bukhari/">সহীহ বুখারী (Sahih Bukhari)</Link>
              </li>
              <li>
                <Link href="/muslim/">মুসলিম শরীফ (সহীহ মুসলিম)</Link>
              </li>
              <li>
                <Link href="/prophets/">নবী-রাসূলদের নামসমূহ</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Information */}
          <div className="footer-section">
            <h4 className="footer-heading">আইনি ও তথ্য</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about/">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link href="/contact/">যোগাযোগ</Link>
              </li>
              <li>
                <Link href="/privacy/">গোপনীয়তা নীতি</Link>
              </li>
              <li>
                <Link href="/disclaimer/">বিবৃতি</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} উমরাহ ও হজ্জ গাইড | বাংলাদেশী মুসলমানদের জন্য</p>
          <p className="footer-note">
            এই ওয়েবসাইটটি শিক্ষামূলক উদ্দেশ্যে তৈরি করা হয়েছে
          </p>
        </div>
      </div>
    </footer>
  )
}
