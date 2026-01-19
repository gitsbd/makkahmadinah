'use client'

import AudioPlayer from './AudioPlayer'

/**
 * Client component for Arabic title with audio player
 * This can be used in server components as a component
 */
export default function ArabicTitle({ englishTitle, arabicText, transliteration }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
      <span>{englishTitle}</span>
      <span style={{ fontSize: '1rem', direction: 'rtl' }}>{arabicText}</span>
      <AudioPlayer arabicText={arabicText} className="alphabet-audio-btn" tone="default" />
      <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>({transliteration})</span>
    </span>
  )
}
