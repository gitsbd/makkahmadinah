import AudioPlayer from './AudioPlayer'

/**
 * Reusable DuaItem Component
 * Displays a dua with Arabic text, transliteration, and translation
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
          <span className="arabic-text">{arabic}</span>
          <AudioPlayer arabicText={arabic} />
        </p>
      )}
      {transliteration && <p className="transliteration"><strong>English Pronunciation:</strong> {transliteration}</p>}
      {banglaTransliteration && <p className="transliteration"><strong>বাংলা উচ্চারণ:</strong> {banglaTransliteration}</p>}
      {translation && <p className="translation"><strong>Meaning (English):</strong> {translation}</p>}
      {banglaTranslation && <p className="translation"><strong>অর্থ (বাংলা):</strong> {banglaTranslation}</p>}
      {children}
    </div>
  )
}

