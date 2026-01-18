import AudioPlayer from './AudioPlayer'
import { formatVerseBreaks } from '@/utils/verseFormatter'

/**
 * Reusable DuaItem Component
 * Displays a dua with Arabic text and Bangla transliteration only
 */
export default function DuaItem({
  title,
  arabic,
  transliteration,
  banglaTransliteration,
  translation,
  banglaTranslation,
  children
}) {
  return (
    <div className="dua-item">
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
      {children}
    </div>
  )
}

