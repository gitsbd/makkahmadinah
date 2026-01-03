'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
            <h1>🕋 উমরাহ ও হজ্জ</h1>
            <p>Umrah & Hajj Guide</p>
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
              <Link href="/" className={isActive('/') ? 'active' : ''} onClick={closeMobileMenu}>
                হোম
              </Link>
            </li>
            <li className="dropdown">
              <button 
                className="dropdown-toggle-btn"
                onClick={() => toggleDropdown('pilgrimage')}
                aria-expanded={openDropdown === 'pilgrimage'}
              >
                তীর্থযাত্রা পরিষেবা
              </button>
              <ul className={`dropdown-menu ${openDropdown === 'pilgrimage' ? 'dropdown-open' : ''}`}>
                <li><Link href="/guide/" className={isActive('/guide/') ? 'active' : ''} onClick={closeMobileMenu}>গাইড</Link></li>
                <li><Link href="/umrah/" className={isActive('/umrah/') ? 'active' : ''} onClick={closeMobileMenu}>উমরাহ</Link></li>
                <li><Link href="/hajj/" className={isActive('/hajj/') ? 'active' : ''} onClick={closeMobileMenu}>হজ্জ</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <button 
                className="dropdown-toggle-btn"
                onClick={() => toggleDropdown('duas')}
                aria-expanded={openDropdown === 'duas'}
              >
                দোয়া ও সূরা
              </button>
              <ul className={`dropdown-menu ${openDropdown === 'duas' ? 'dropdown-open' : ''}`}>
                <li><Link href="/duas/" className={isActive('/duas/') ? 'active' : ''} onClick={closeMobileMenu}>উমরাহ ও হজ্জ দোয়া</Link></li>
                <li><Link href="/umrah-duas/" className={isActive('/umrah-duas/') ? 'active' : ''} onClick={closeMobileMenu}>উমরাহ দোয়া</Link></li>
                <li><Link href="/daily-duas/" className={isActive('/daily-duas/') ? 'active' : ''} onClick={closeMobileMenu}>দৈনিক দোয়া</Link></li>
                <li><Link href="/general-duas/" className={isActive('/general-duas/') ? 'active' : ''} onClick={closeMobileMenu}>সাধারণ দোয়া</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <button 
                className="dropdown-toggle-btn"
                onClick={() => toggleDropdown('history')}
                aria-expanded={openDropdown === 'history'}
              >
                ইতিহাস
              </button>
              <ul className={`dropdown-menu ${openDropdown === 'history' ? 'dropdown-open' : ''}`}>
                <li><Link href="/makkah/" className={isActive('/makkah/') ? 'active' : ''} onClick={closeMobileMenu}>মক্কা (Makkah)</Link></li>
                <li><Link href="/madinah/" className={isActive('/madinah/') ? 'active' : ''} onClick={closeMobileMenu}>মদিনা (Madinah)</Link></li>
                <li><Link href="/makkah-places/" className={isActive('/makkah-places/') ? 'active' : ''} onClick={closeMobileMenu}>মক্কা দর্শনীয় স্থান</Link></li>
                <li><Link href="/madinah-places/" className={isActive('/madinah-places/') ? 'active' : ''} onClick={closeMobileMenu}>মদিনা দর্শনীয় স্থান</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <button 
                className="dropdown-toggle-btn"
                onClick={() => toggleDropdown('library')}
                aria-expanded={openDropdown === 'library'}
              >
                ইসলামী লাইব্রেরি
              </button>
              <ul className={`dropdown-menu ${openDropdown === 'library' ? 'dropdown-open' : ''}`}>
                <li><Link href="/quran/" className={isActive('/quran/') ? 'active' : ''} onClick={closeMobileMenu}>কুরআন (Qur'an)</Link></li>
                <li><Link href="/bukhari/" className={isActive('/bukhari/') ? 'active' : ''} onClick={closeMobileMenu}>সহীহ বুখারী (Sahih Bukhari)</Link></li>
                <li><Link href="/muslim/" className={isActive('/muslim/') ? 'active' : ''} onClick={closeMobileMenu}>মুসলিম শরীফ (সহীহ মুসলিম)</Link></li>
                <li><Link href="/prophets/" className={isActive('/prophets/') ? 'active' : ''} onClick={closeMobileMenu}>নবী-রাসূলদের নামসমূহ</Link></li>
                <li><Link href="/akhlaq/" className={isActive('/akhlaq/') ? 'active' : ''} onClick={closeMobileMenu}>আখলাক ও আদব</Link></li>
                <li><Link href="/ibadat/" className={isActive('/ibadat/') ? 'active' : ''} onClick={closeMobileMenu}>ইবাদত</Link></li>
              </ul>
            </li>
          </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

