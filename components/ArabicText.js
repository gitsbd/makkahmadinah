import AudioPlayer from './AudioPlayer'

/**
 * Reusable ArabicText Component
 * Wraps Arabic text with audio player
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
  
  return (
    <p className={`arabic ${className}`}>
      <span className="arabic-text">{children}</span>
      {arabicText && <AudioPlayer arabicText={arabicText} />}
    </p>
  )
}

