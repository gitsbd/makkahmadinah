'use client'

import ExpandableSection from './ExpandableSection'

export default function GuideCategory({ id, title, children, defaultOpen = false, number = null }) {
  return (
    <ExpandableSection
      id={id}
      title={title}
      defaultOpen={defaultOpen}
      className="guide-category-wrapper"
      headerClassName="guide-category-header"
      number={number}
    >
      <div className="guide-content">
        {children}
      </div>
    </ExpandableSection>
  )
}

