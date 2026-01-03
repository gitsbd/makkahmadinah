/**
 * Reusable SectionWrapper Component
 * Provides consistent section structure with container
 */
export default function SectionWrapper({ children, className = '' }) {
  return (
    <section className={className}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

