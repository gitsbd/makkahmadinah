'use client'

import ExpandableSection from './ExpandableSection'

export default function GeneralDuaCategory({ title, children, defaultOpen = false, number = null }) {
  return (
    <ExpandableSection
      id={`general-dua-${title.replace(/\s+/g, '-').toLowerCase()}`}
      title={title}
      defaultOpen={defaultOpen}
      className="general-dua-category-wrapper"
      number={number}
    >
      {children}
    </ExpandableSection>
  )
}

