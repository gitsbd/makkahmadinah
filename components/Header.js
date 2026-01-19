'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AudioPlayer from './AudioPlayer'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  
  // Normalize pathname for comparison (handle trailing slashes)
  const normalizePath = (path) => {
    if (!path || path === '/') return '/'
    return path.endsWith('/') ? path : path + '/'
  }
  
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/' || pathname === ''
    }
    return normalizePath(pathname) === normalizePath(href)
  }

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <>
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header className={`header ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="logo">
            <Link href="/" onClick={closeMobileMenu} aria-label="হোম পেজে যান">
              <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                🕋 উমরাহ ও হজ্জ (العمرة والحج)
                <AudioPlayer arabicText="العمرة والحج" className="alphabet-audio-btn" tone="default" />
              </h1>
              <p>Umrah & Hajj Guide</p>
            </Link>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link href="/" className={isActive('/') ? 'active' : ''} onClick={closeMobileMenu}>
                  হোম (الرئيسية)
                </Link>
                <AudioPlayer arabicText="الرئيسية" className="alphabet-audio-btn" tone="default" />
              </span>
            </li>
            <li className="dropdown">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  className="dropdown-toggle-btn"
                  onClick={() => toggleDropdown('pilgrimage')}
                  aria-expanded={openDropdown === 'pilgrimage'}
                >
                  হজযাত্রী/উমরাহযাত্রী সেবা (خدمات الحج والعمرة)
                </button>
                <AudioPlayer arabicText="خدمات الحج والعمرة" className="alphabet-audio-btn" tone="default" />
              </div>
              <ul className={`dropdown-menu ${openDropdown === 'pilgrimage' ? 'dropdown-open' : ''}`}>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/guide/" className={isActive('/guide/') ? 'active' : ''} onClick={closeMobileMenu}>গাইড (الدليل)</Link>
                    <AudioPlayer arabicText="الدليل" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/umrah/" className={isActive('/umrah/') ? 'active' : ''} onClick={closeMobileMenu}>উমরাহ (العمرة)</Link>
                    <AudioPlayer arabicText="العمرة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/hajj/" className={isActive('/hajj/') ? 'active' : ''} onClick={closeMobileMenu}>হজ্জ (الحج)</Link>
                    <AudioPlayer arabicText="الحج" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  className="dropdown-toggle-btn"
                  onClick={() => toggleDropdown('duas')}
                  aria-expanded={openDropdown === 'duas'}
                >
                  দোয়া ও সূরা (الدعاء والسور)
                </button>
                <AudioPlayer arabicText="الدعاء والسور" className="alphabet-audio-btn" tone="default" />
              </div>
              <ul className={`dropdown-menu ${openDropdown === 'duas' ? 'dropdown-open' : ''}`}>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/surah/" className={isActive('/surah/') ? 'active' : ''} onClick={closeMobileMenu}>সূরা (السور)</Link>
                    <AudioPlayer arabicText="السور" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/duas/" className={isActive('/duas/') ? 'active' : ''} onClick={closeMobileMenu}>উমরাহ ও হজ্জ দোয়া (دعاء العمرة والحج)</Link>
                    <AudioPlayer arabicText="دعاء العمرة والحج" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/umrah-duas/" className={isActive('/umrah-duas/') ? 'active' : ''} onClick={closeMobileMenu}>উমরাহ দোয়া (دعاء العمرة)</Link>
                    <AudioPlayer arabicText="دعاء العمرة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/general-duas/" className={isActive('/general-duas/') ? 'active' : ''} onClick={closeMobileMenu}>দৈনন্দিন মাসনূন দোয়া (الأدعية اليومية)</Link>
                    <AudioPlayer arabicText="الأدعية اليومية" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/daily-duas/" className={isActive('/daily-duas/') ? 'active' : ''} onClick={closeMobileMenu}>আমার দোয়া (دعائي)</Link>
                    <AudioPlayer arabicText="دعائي" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/monajat/" className={isActive('/monajat/') ? 'active' : ''} onClick={closeMobileMenu}>মোনাজাত (المناجاة)</Link>
                    <AudioPlayer arabicText="المناجاة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  className="dropdown-toggle-btn"
                  onClick={() => toggleDropdown('history')}
                  aria-expanded={openDropdown === 'history'}
                >
                  ইতিহাস (التاريخ)
                </button>
                <AudioPlayer arabicText="التاريخ" className="alphabet-audio-btn" tone="default" />
              </div>
              <ul className={`dropdown-menu ${openDropdown === 'history' ? 'dropdown-open' : ''}`}>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/makkah/" className={isActive('/makkah/') ? 'active' : ''} onClick={closeMobileMenu}>মক্কা (مكة)</Link>
                    <AudioPlayer arabicText="مكة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/madinah/" className={isActive('/madinah/') ? 'active' : ''} onClick={closeMobileMenu}>মদিনা (المدينة)</Link>
                    <AudioPlayer arabicText="المدينة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/makkah-places/" className={isActive('/makkah-places/') ? 'active' : ''} onClick={closeMobileMenu}>মক্কা দর্শনীয় স্থান (أماكن مكة)</Link>
                    <AudioPlayer arabicText="أماكن مكة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/madinah-places/" className={isActive('/madinah-places/') ? 'active' : ''} onClick={closeMobileMenu}>মদিনা দর্শনীয় স্থান (أماكن المدينة)</Link>
                    <AudioPlayer arabicText="أماكن المدينة" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  className="dropdown-toggle-btn"
                  onClick={() => toggleDropdown('library')}
                  aria-expanded={openDropdown === 'library'}
                >
                  ইসলামী লাইব্রেরি (المكتبة الإسلامية)
                </button>
                <AudioPlayer arabicText="المكتبة الإسلامية" className="alphabet-audio-btn" tone="default" />
              </div>
              <ul className={`dropdown-menu ${openDropdown === 'library' ? 'dropdown-open' : ''}`}>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/arabic-learning/" className={isActive('/arabic-learning/') ? 'active' : ''} onClick={closeMobileMenu}>Arabic Learning (تعلم العربية)</Link>
                    <AudioPlayer arabicText="تعلم العربية" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/quran/" className={isActive('/quran/') ? 'active' : ''} onClick={closeMobileMenu}>কুরআন (القرآن)</Link>
                    <AudioPlayer arabicText="القرآن" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/bukhari/" className={isActive('/bukhari/') ? 'active' : ''} onClick={closeMobileMenu}>সহীহ বুখারী (صحيح البخاري)</Link>
                    <AudioPlayer arabicText="صحيح البخاري" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/muslim/" className={isActive('/muslim/') ? 'active' : ''} onClick={closeMobileMenu}>মুসলিম শরীফ (صحيح مسلم)</Link>
                    <AudioPlayer arabicText="صحيح مسلم" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/prophets/" className={isActive('/prophets/') ? 'active' : ''} onClick={closeMobileMenu}>নবী-রাসূলদের নামসমূহ (أسماء الأنبياء والرسل)</Link>
                    <AudioPlayer arabicText="أسماء الأنبياء والرسل" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/akhlaq/" className={isActive('/akhlaq/') ? 'active' : ''} onClick={closeMobileMenu}>আখলাক ও আদব (الأخلاق والأدب)</Link>
                    <AudioPlayer arabicText="الأخلاق والأدب" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Link href="/ibadat/" className={isActive('/ibadat/') ? 'active' : ''} onClick={closeMobileMenu}>ইবাদত (العبادات)</Link>
                    <AudioPlayer arabicText="العبادات" className="alphabet-audio-btn" tone="default" />
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

