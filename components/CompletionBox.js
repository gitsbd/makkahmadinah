import ImportantNote from './ImportantNote'

/**
 * Reusable CompletionBox Component
 * Displays completion message for hajj/umrah
 */
export default function CompletionBox({ 
  title, 
  message, 
  note 
}) {
  return (
    <div className="completion-box">
      <h2>{title}</h2>
      {message && <p>{message}</p>}
      {note && (
        <ImportantNote className="mt-md">
          {note}
        </ImportantNote>
      )}
    </div>
  )
}

