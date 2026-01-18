'use client'

import AudioPlayer from './AudioPlayer'

/**
 * Arabic Alphabet Item Component with Audio
 * Displays a single Arabic letter with pronunciation and audio playback
 * Uses proper Arabic letter names according to Arabic grammar standards
 */
export default function ArabicAlphabetItem({ letter, arabicName, english, bangla }) {
  // Use Arabic name for proper pronunciation, fallback to letter if name not provided
  const audioText = arabicName || letter;
  
  return (
    <div className="alphabet-item">
      <div className="alphabet-letter-container">
        <div className="alphabet-letter">{letter}</div>
        <div className="alphabet-audio-wrapper">
          <AudioPlayer 
            arabicText={audioText} 
            className="alphabet-audio-btn"
            tone="default"
          />
        </div>
      </div>
      <div className="alphabet-pronunciation">
        <div className="pronunciation-english">{english}</div>
        <div className="pronunciation-bangla">{bangla}</div>
      </div>
    </div>
  )
}
