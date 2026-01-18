import AudioPlayer from './AudioPlayer'
import { formatVerseBreaks } from '@/utils/verseFormatter'

/**
 * Reusable SurahItem Component
 * Displays surah with Arabic text and Bangla transliteration only
 */
export default function SurahItem({ title, arabic, translation, transliteration, banglaTransliteration }) {
  return (
    <div className="surah-item">
      {title && <h3>{title}</h3>}
      {arabic && (
        <p className="arabic">
          <span 
            className="arabic-text verse-text"
            dangerouslySetInnerHTML={{ __html: formatVerseBreaks(arabic) }}
          />
          <AudioPlayer arabicText={arabic} />
        </p>
      )}
      {banglaTransliteration && (
        <p className="transliteration">
          <strong>বাংলা উচ্চারণ:</strong>{' '}
          <span 
            className="verse-text"
            dangerouslySetInnerHTML={{ __html: formatVerseBreaks(banglaTransliteration) }}
          />
        </p>
      )}
    </div>
  )
}

