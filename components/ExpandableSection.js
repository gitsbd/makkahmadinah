'use client'

import { useState } from 'react'

/**
 * Modern ExpandableSection Component
 * Best practices:
 * - Accessibility (ARIA attributes)
 * - Keyboard navigation support
 * - Smooth animations
 * - Visual indicators
 * - Consistent styling
 */
export default function ExpandableSection({ 
  id, 
  title, 
  defaultOpen = false, 
  children, 
  className = '',
  headerClassName = '',
  icon = null,
  number = null
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div 
      className={`expandable-section ${className}`}
      id={id}
    >
      <button
        className={`expandable-toggle ${isOpen ? 'active' : ''} ${headerClassName}`}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        type="button"
      >
        <div className="expandable-header-content">
          {number !== null && <span className="expandable-number">{number}</span>}
          {icon && <span className="expandable-icon">{icon}</span>}
          <h2 className="expandable-title">{title}</h2>
        </div>
        <span 
          className="expandable-arrow"
          aria-hidden="true"
        >
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      <div
        id={`${id}-content`}
        className={`expandable-content ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
        role="region"
      >
        {children}
      </div>
    </div>
  )
}

