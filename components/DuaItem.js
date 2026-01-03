import AudioPlayer from './AudioPlayer'

/**
 * Reusable DuaItem Component
 * Displays a dua with Arabic text, transliteration, and translation
 */
export default function DuaItem({
  title,
  arabic,
  transliteration,
  translation,
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
      {transliteration && <p className="transliteration">{transliteration}</p>}
      {translation && <p className="translation">{translation}</p>}
      {children}
    </div>
  )
}

