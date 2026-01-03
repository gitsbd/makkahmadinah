/**
 * Reusable ImportantNote Component
 * Displays important notes with different color variants
 */
export default function ImportantNote({ 
  variant = 'orange', 
  title, 
  children,
  className = '' 
}) {
  const variantClass = `important-note important-note-${variant}`
  
  return (
    <div className={`${variantClass} ${className}`}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  )
}

