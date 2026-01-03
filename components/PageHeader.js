import { getImagePath } from '@/utils/imagePath'

/**
 * Reusable PageHeader Component
 * Used for consistent page headers across all pages
 */
export default function PageHeader({ title, subtitle, sectionCount, image, imageAlt }) {
  // Use utility to handle basePath for GitHub Pages
  const imageSrc = image ? getImagePath(image) : null
  
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {sectionCount && (
          <p className="section-count">মোট <strong>{sectionCount}</strong>টি বিভাগ</p>
        )}
        {imageSrc && (
          <div className="image-container-lg">
            <img 
              src={imageSrc} 
              alt={imageAlt || title} 
              className="image-header"
            />
          </div>
        )}
      </div>
    </section>
  )
}

