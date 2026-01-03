/**
 * Reusable SurahItem Component
 * Displays surah with Arabic text and translation
 */
export default function SurahItem({ title, arabic, translation, transliteration }) {
  return (
    <div className="surah-item">
      {title && <h3>{title}</h3>}
      {arabic && <p className="arabic">{arabic}</p>}
      {transliteration && <p className="transliteration">{transliteration}</p>}
      {translation && <p className="translation">{translation}</p>}
    </div>
  )
}

