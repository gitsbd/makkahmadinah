'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
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

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🕋 উমরাহ ও হজ্জ</h1>
          <p>Umrah & Hajj Guide</p>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                হোম
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/umrah/" className={isActive('/umrah/') || isActive('/guide/') || isActive('/hajj/') ? 'active' : ''}>
                তীর্থযাত্রা পরিষেবা
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/guide/" className={isActive('/guide/') ? 'active' : ''}>গাইড</Link></li>
                <li><Link href="/umrah/" className={isActive('/umrah/') ? 'active' : ''}>উমরাহ</Link></li>
                <li><Link href="/hajj/" className={isActive('/hajj/') ? 'active' : ''}>হজ্জ</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/duas/" className={isActive('/duas/') || isActive('/daily-duas/') || isActive('/general-duas/') || isActive('/umrah-duas/') ? 'active' : ''}>
                দোয়া ও সূরা
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/duas/" className={isActive('/duas/') ? 'active' : ''}>উমরাহ ও হজ্জ দোয়া</Link></li>
                <li><Link href="/umrah-duas/" className={isActive('/umrah-duas/') ? 'active' : ''}>উমরাহ দোয়া</Link></li>
                <li><Link href="/daily-duas/" className={isActive('/daily-duas/') ? 'active' : ''}>দৈনিক দোয়া</Link></li>
                <li><Link href="/general-duas/" className={isActive('/general-duas/') ? 'active' : ''}>সাধারণ দোয়া</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/makkah/" className={isActive('/makkah/') || isActive('/madinah/') || isActive('/makkah-places/') || isActive('/madinah-places/') ? 'active' : ''}>
                ইতিহাস
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/makkah/" className={isActive('/makkah/') ? 'active' : ''}>মক্কা (Makkah)</Link></li>
                <li><Link href="/madinah/" className={isActive('/madinah/') ? 'active' : ''}>মদিনা (Madinah)</Link></li>
                <li><Link href="/makkah-places/" className={isActive('/makkah-places/') ? 'active' : ''}>মক্কা দর্শনীয় স্থান</Link></li>
                <li><Link href="/madinah-places/" className={isActive('/madinah-places/') ? 'active' : ''}>মদিনা দর্শনীয় স্থান</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/quran/" className={isActive('/quran/') || isActive('/bukhari/') || isActive('/muslim/') || isActive('/prophets/') || isActive('/akhlaq/') || isActive('/ibadat/') ? 'active' : ''}>
                ইসলামী লাইব্রেরি
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/quran/" className={isActive('/quran/') ? 'active' : ''}>কুরআন (Qur'an)</Link></li>
                <li><Link href="/bukhari/" className={isActive('/bukhari/') ? 'active' : ''}>সহীহ বুখারী (Sahih Bukhari)</Link></li>
                <li><Link href="/muslim/" className={isActive('/muslim/') ? 'active' : ''}>মুসলিম শরীফ (সহীহ মুসলিম)</Link></li>
                <li><Link href="/prophets/" className={isActive('/prophets/') ? 'active' : ''}>নবী-রাসূলদের নামসমূহ</Link></li>
                <li><Link href="/akhlaq/" className={isActive('/akhlaq/') ? 'active' : ''}>আখলাক ও আদব</Link></li>
                <li><Link href="/ibadat/" className={isActive('/ibadat/') ? 'active' : ''}>ইবাদত</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

