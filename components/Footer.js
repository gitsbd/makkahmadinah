'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import VisitorCounter from './VisitorCounter'
import AudioPlayer from './AudioPlayer'

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Pilgrimage Services */}
          <div className="footer-section">
            <h4 className="footer-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              হজযাত্রী/উমরাহযাত্রী সেবা (خدمات الحج والعمرة)
              <AudioPlayer arabicText="خدمات الحج والعمرة" className="alphabet-audio-btn" tone="default" />
            </h4>
            <ul className="footer-links">
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/guide/">গাইড (الدليل)</Link>
                  <AudioPlayer arabicText="الدليل" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/umrah/">উমরাহ (العمرة)</Link>
                  <AudioPlayer arabicText="العمرة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/hajj/">হজ্জ (الحج)</Link>
                  <AudioPlayer arabicText="الحج" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
            </ul>
          </div>

          {/* Duas & Surahs */}
          <div className="footer-section">
            <h4 className="footer-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              দোয়া ও সূরা (الدعاء والسور)
              <AudioPlayer arabicText="الدعاء والسور" className="alphabet-audio-btn" tone="default" />
            </h4>
            <ul className="footer-links">
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/surah/">সূরা (السور)</Link>
                  <AudioPlayer arabicText="السور" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/duas/">উমরাহ ও হজ্জ দোয়া (دعاء العمرة والحج)</Link>
                  <AudioPlayer arabicText="دعاء العمرة والحج" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/umrah-duas/">উমরাহ দোয়া (دعاء العمرة)</Link>
                  <AudioPlayer arabicText="دعاء العمرة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/general-duas/">দৈনন্দিন মাসনূন দোয়া (الأدعية اليومية)</Link>
                  <AudioPlayer arabicText="الأدعية اليومية" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/daily-duas/">আমার দোয়া (دعائي)</Link>
                  <AudioPlayer arabicText="دعائي" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/monajat/">মোনাজাত (المناجاة)</Link>
                  <AudioPlayer arabicText="المناجاة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
            </ul>
          </div>

          {/* History & Places */}
          <div className="footer-section">
            <h4 className="footer-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ইতিহাস ও স্থান (التاريخ والأماكن)
              <AudioPlayer arabicText="التاريخ والأماكن" className="alphabet-audio-btn" tone="default" />
            </h4>
            <ul className="footer-links">
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/makkah/">মক্কার ইতিহাস (تاريخ مكة)</Link>
                  <AudioPlayer arabicText="تاريخ مكة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/madinah/">মদিনার ইতিহাস (تاريخ المدينة)</Link>
                  <AudioPlayer arabicText="تاريخ المدينة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/makkah-places/">মক্কা দর্শনীয় স্থান (أماكن مكة)</Link>
                  <AudioPlayer arabicText="أماكن مكة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/madinah-places/">মদিনা দর্শনীয় স্থান (أماكن المدينة)</Link>
                  <AudioPlayer arabicText="أماكن المدينة" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
            </ul>
          </div>

          {/* Islamic Library */}
          <div className="footer-section">
            <h4 className="footer-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              ইসলামী লাইব্রেরি (المكتبة الإسلامية)
              <AudioPlayer arabicText="المكتبة الإسلامية" className="alphabet-audio-btn" tone="default" />
            </h4>
            <ul className="footer-links">
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/arabic-learning/">Arabic Learning (تعلم العربية)</Link>
                  <AudioPlayer arabicText="تعلم العربية" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/quran/">কুরআন (القرآن)</Link>
                  <AudioPlayer arabicText="القرآن" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/bukhari/">সহীহ বুখারী (صحيح البخاري)</Link>
                  <AudioPlayer arabicText="صحيح البخاري" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/muslim/">মুসলিম শরীফ (صحيح مسلم)</Link>
                  <AudioPlayer arabicText="صحيح مسلم" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/prophets/">নবী-রাসূলদের নামসমূহ (أسماء الأنبياء والرسل)</Link>
                  <AudioPlayer arabicText="أسماء الأنبياء والرسل" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/akhlaq/">আখলাক ও আদব (الأخلاق والأدب)</Link>
                  <AudioPlayer arabicText="الأخلاق والأدب" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/ibadat/">ইবাদত (العبادات)</Link>
                  <AudioPlayer arabicText="العبادات" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
            </ul>
          </div>

          {/* Legal & Information */}
          <div className="footer-section">
            <h4 className="footer-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              আইনি ও তথ্য (القانونية والمعلومات)
              <AudioPlayer arabicText="القانونية والمعلومات" className="alphabet-audio-btn" tone="default" />
            </h4>
            <ul className="footer-links">
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/about/">আমাদের সম্পর্কে (من نحن)</Link>
                  <AudioPlayer arabicText="من نحن" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/contact/">যোগাযোগ (اتصل بنا)</Link>
                  <AudioPlayer arabicText="اتصل بنا" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/privacy/">গোপনীয়তা নীতি (سياسة الخصوصية)</Link>
                  <AudioPlayer arabicText="سياسة الخصوصية" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Link href="/disclaimer/">বিবৃতি (إخلاء المسؤولية)</Link>
                  <AudioPlayer arabicText="إخلاء المسؤولية" className="alphabet-audio-btn" tone="default" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} উমরাহ ও হজ্জ গাইড (دليل العمرة والحج) | বাংলাদেশী মুসলমানদের জন্য (للمسلمين البنغلاديشيين)</p>
          <p className="footer-note">
            এই ওয়েবসাইটটি শিক্ষামূলক উদ্দেশ্যে তৈরি করা হয়েছে (تم إنشاء هذا الموقع لأغراض تعليمية)
          </p>
          {pathname === '/' && (
            <p className="footer-note">
              <VisitorCounter />
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
