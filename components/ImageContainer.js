/**
 * Reusable ImageContainer Component
 * Displays images with consistent styling
 */
export default function ImageContainer({ 
  src, 
  alt, 
  variant = 'card', // 'card', 'header', or 'responsive'
  className = '' 
}) {
  const imageClass = variant === 'header' 
    ? 'image-header' 
    : variant === 'card' 
    ? 'image-card' 
    : 'image-responsive'
  
  const containerClass = variant === 'header' 
    ? 'image-container-lg' 
    : 'image-container'
  
  return (
    <div className={`${containerClass} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={imageClass}
      />
    </div>
  )
}

