import { formatVerseBreaks } from '@/utils/verseFormatter'

/**
 * Reusable TransliterationText Component
 * Displays transliteration with verse breaks and "বাংলা উচ্চারণ:" label
 */
export default function TransliterationText({ children, className = '' }) {
  if (!children) return null;
  
  const text = typeof children === 'string' ? children : String(children);
  const formattedText = formatVerseBreaks(text);
  
  return (
    <p className={`transliteration ${className}`}>
      <strong>বাংলা উচ্চারণ:</strong>{' '}
      <span 
        className="verse-text"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    </p>
  );
}
