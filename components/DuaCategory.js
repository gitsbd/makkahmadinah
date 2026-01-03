'use client'

import ExpandableSection from './ExpandableSection'

export default function DuaCategory({ id, title, defaultOpen = false, children, number = null }) {
  return (
    <ExpandableSection
      id={id}
      title={title}
      defaultOpen={defaultOpen}
      className="dua-category-wrapper"
      headerClassName="dua-category-header"
      number={number}
    >
      {children}
    </ExpandableSection>
  )
}

