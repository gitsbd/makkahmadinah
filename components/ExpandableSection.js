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

  const toggle = (e) => {
    // Don't toggle if clicking on an interactive element (button, link, etc.)
    if (e && e.target && e.target.closest('button, a, [role="button"]:not(.expandable-toggle)')) {
      return
    }
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e) => {
    // Don't handle if focus is on an interactive element inside
    if (e.target.closest('button, a, [role="button"]:not(.expandable-toggle)')) {
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(e)
    }
  }

  return (
    <div 
      className={`expandable-section ${className}`}
      id={id}
    >
      <div
        className={`expandable-toggle ${isOpen ? 'active' : ''} ${headerClassName}`}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        role="button"
        tabIndex={0}
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
      </div>
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

