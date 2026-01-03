/**
 * Reusable InfoText Component
 * Displays informational text with consistent styling
 */
export default function InfoText({ children, className = '' }) {
  return (
    <p className={`info-text ${className}`}>
      {children}
    </p>
  )
}

