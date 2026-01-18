/**
 * Utility function to add line breaks after verse numbers
 * Handles both Arabic numerals (١-٩) and Bengali numerals (০-৯) and regular digits (0-9)
 * 
 * @param {string} text - The text containing verse numbers
 * @returns {string} - Text with line breaks after verse numbers
 */
export function formatVerseBreaks(text) {
  if (!text) return '';
  
  // Pattern matches verse numbers in formats:
  // - (১), (২), etc. (Bengali numerals)
  // - (1), (2), etc. (Regular digits)
  // - (١), (٢), etc. (Arabic-Indic numerals)
  // - (٢٨٥), etc. (Multi-digit Arabic-Indic)
  // The pattern looks for opening parenthesis, followed by digits/numerals, then closing parenthesis
  const versePattern = /(\([০-৯0-9\u0660-\u0669]+\))/g;
  
  // Replace verse numbers with the number followed by a line break
  return text.replace(versePattern, '$1<br />');
}

/**
 * React component wrapper that applies verse breaks to text
 * @param {string} text - The text to format
 * @returns {JSX.Element} - Formatted text with line breaks
 */
export function VerseText({ text, className = '' }) {
  if (!text) return null;
  
  const formattedText = formatVerseBreaks(text);
  
  return (
    <span 
      className={`verse-text ${className}`}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
}
