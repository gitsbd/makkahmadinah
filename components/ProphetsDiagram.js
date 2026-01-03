'use client'

import { useState } from 'react'

/**
 * Visual Diagram Component for All Prophets
 * Displays all 25 prophets mentioned in the Quran in a grid layout
 */
export default function ProphetsDiagram() {
  const [hoveredProphet, setHoveredProphet] = useState(null)

  const prophets = [
    { id: 1, name: 'আদম', arabic: 'آدَم', english: 'Adam', ululAzm: false },
    { id: 2, name: 'ইদ্রিস', arabic: 'إِدْرِيس', english: 'Idris', ululAzm: false },
    { id: 3, name: 'নূহ', arabic: 'نُوح', english: 'Nuh', ululAzm: true },
    { id: 4, name: 'হুদ', arabic: 'هُود', english: 'Hud', ululAzm: false },
    { id: 5, name: 'সালিহ', arabic: 'صَالِح', english: 'Salih', ululAzm: false },
    { id: 6, name: 'ইব্রাহিম', arabic: 'إِبْرَاهِيم', english: 'Ibrahim', ululAzm: true },
    { id: 7, name: 'লূত', arabic: 'لُوط', english: 'Lut', ululAzm: false },
    { id: 8, name: 'ইসমাঈল', arabic: 'إِسْمَاعِيل', english: 'Ismail', ululAzm: false },
    { id: 9, name: 'ইসহাক', arabic: 'إِسْحَاق', english: 'Ishaq', ululAzm: false },
    { id: 10, name: 'ইয়াকুব', arabic: 'يَعْقُوب', english: 'Yaqub', ululAzm: false },
    { id: 11, name: 'ইউসুফ', arabic: 'يُوسُف', english: 'Yusuf', ululAzm: false },
    { id: 12, name: 'আইয়ুব', arabic: 'أَيُّوب', english: 'Ayub', ululAzm: false },
    { id: 13, name: 'শুআইব', arabic: 'شُعَيْب', english: 'Shuaib', ululAzm: false },
    { id: 14, name: 'মুসা', arabic: 'مُوسَى', english: 'Musa', ululAzm: true },
    { id: 15, name: 'হারুন', arabic: 'هَارُون', english: 'Harun', ululAzm: false },
    { id: 16, name: 'দাউদ', arabic: 'دَاوُود', english: 'Dawud', ululAzm: false },
    { id: 17, name: 'সুলাইমান', arabic: 'سُلَيْمَان', english: 'Sulaiman', ululAzm: false },
    { id: 18, name: 'ইলিয়াস', arabic: 'إِلْيَاس', english: 'Ilyas', ululAzm: false },
    { id: 19, name: 'আল-ইয়াসা', arabic: 'الْيَسَع', english: 'Alyasa', ululAzm: false },
    { id: 20, name: 'ইউনুস', arabic: 'يُونُس', english: 'Yunus', ululAzm: false },
    { id: 21, name: 'যাকারিয়া', arabic: 'زَكَرِيَّا', english: 'Zakariya', ululAzm: false },
    { id: 22, name: 'ইয়াহইয়া', arabic: 'يَحْيَى', english: 'Yahya', ululAzm: false },
    { id: 23, name: 'ঈসা', arabic: 'عِيسَى', english: 'Isa', ululAzm: true },
    { id: 24, name: 'মুহাম্মদ', arabic: 'مُحَمَّد', english: 'Muhammad', ululAzm: true },
  ]

  return (
    <div className="prophets-diagram">
      <div className="container">
        <div className="prophets-diagram-header">
          <h2>কুরআনে উল্লিখিত ২৫ জন নবী-রাসূল</h2>
          <p className="prophets-diagram-subtitle">নিচের চিত্রে সকল নবী-রাসূলের নাম দেখানো হয়েছে</p>
          <div className="prophets-legend">
            <div className="legend-item">
              <span className="legend-color ulul-azm"></span>
              <span>উলুল আযম (৫ জন প্রধান রাসূল)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color regular"></span>
              <span>অন্যান্য নবী-রাসূল</span>
            </div>
          </div>
        </div>
        
        <div className="prophets-grid">
          {prophets.map((prophet) => (
            <div
              key={prophet.id}
              className={`prophet-card ${prophet.ululAzm ? 'ulul-azm' : ''}`}
              onMouseEnter={() => setHoveredProphet(prophet.id)}
              onMouseLeave={() => setHoveredProphet(null)}
            >
              <div className="prophet-number">{prophet.id}</div>
              <div className="prophet-arabic">{prophet.arabic}</div>
              <div className="prophet-name">{prophet.name} (আ.)</div>
              <div className="prophet-english">{prophet.english}</div>
              {prophet.ululAzm && (
                <div className="prophet-badge">উলুল আযম</div>
              )}
              {hoveredProphet === prophet.id && (
                <div className="prophet-tooltip">
                  {prophet.name} (আ.) - {prophet.english} (A.S.)
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="prophets-info">
          <p className="info-text">
            <strong>উলুল আযম:</strong> পাঁচজন প্রধান রাসূল - নূহ (আ.), ইব্রাহিম (আ.), মুসা (আ.), ঈসা (আ.), এবং মুহাম্মদ (সা.)
          </p>
        </div>
      </div>
    </div>
  )
}

