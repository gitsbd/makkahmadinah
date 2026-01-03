/**
 * Reusable InfoBox Component
 * Displays informational content with different color variants
 */
export default function InfoBox({ 
  variant = 'green', 
  title, 
  children,
  className = '' 
}) {
  const variantClass = `info-box info-box-${variant}`
  
  return (
    <div className={`${variantClass} ${className}`}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  )
}

