import AudioPlayer from './AudioPlayer'
import { formatVerseBreaks } from '@/utils/verseFormatter'

/**
 * Reusable ArabicText Component
 * Wraps Arabic text with audio player and verse breaks
 */
export default function ArabicText({ children, className = '' }) {
  // Extract Arabic text from children
  let arabicText = ''
  if (typeof children === 'string') {
    arabicText = children
  } else if (children?.props?.children) {
    arabicText = typeof children.props.children === 'string' 
      ? children.props.children 
      : children.props.children?.join?.('') || ''
  }
  
  const formattedText = typeof children === 'string' 
    ? formatVerseBreaks(children) 
    : children;
  
  return (
    <p className={`arabic ${className}`}>
      <span 
        className="arabic-text verse-text"
        dangerouslySetInnerHTML={typeof children === 'string' ? { __html: formattedText } : undefined}
      >
        {typeof children !== 'string' ? children : null}
      </span>
      {arabicText && <AudioPlayer arabicText={arabicText} />}
    </p>
  )
}

