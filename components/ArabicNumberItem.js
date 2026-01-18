'use client'

import AudioPlayer from './AudioPlayer'

/**
 * Arabic Number Item Component with Audio
 * Displays a single Arabic number with pronunciation and audio playback
 */
export default function ArabicNumberItem({ number, arabicNumber, arabicName, english, bangla }) {
  // Use Arabic name for proper pronunciation, ensure we always have text
  const audioText = arabicName || arabicNumber || number;
  
  // Check if this is a milestone number (0-10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
  const milestoneNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
  const isMilestone = milestoneNumbers.includes(number);
  
  return (
    <div className={`alphabet-item ${isMilestone ? 'alphabet-item-milestone' : ''}`}>
      <div className="alphabet-letter-container">
        <div className="alphabet-letter">{arabicNumber}</div>
        <div className="alphabet-audio-wrapper">
          <AudioPlayer 
            arabicText={audioText} 
            className="alphabet-audio-btn"
            tone="default"
          />
        </div>
      </div>
      <div className="alphabet-pronunciation">
        <div className={`pronunciation-number ${isMilestone ? 'pronunciation-number-bold' : ''}`}>{number}</div>
        <div className="pronunciation-english">{english}</div>
        <div className="pronunciation-bangla">{bangla}</div>
      </div>
    </div>
  )
}
