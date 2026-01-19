import AudioPlayer from '@/components/AudioPlayer'

/**
 * Helper function to create Arabic title with audio player
 * Note: This returns JSX with a client component, so it should only be used
 * within client components or passed as props to client components
 * @param {string} englishTitle - The English/Bengali title
 * @param {string} arabicText - The Arabic text
 * @param {string} transliteration - The transliteration guide
 * @returns {JSX.Element} - Formatted title with Arabic and audio
 */
export const createArabicTitle = (englishTitle, arabicText, transliteration) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
    <span>{englishTitle}</span>
    <span style={{ fontSize: '1rem', direction: 'rtl' }}>{arabicText}</span>
    <AudioPlayer arabicText={arabicText} className="alphabet-audio-btn" tone="default" />
    <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>({transliteration})</span>
  </span>
)
