'use client'

import { useState } from 'react'
import AudioPlayer from './AudioPlayer'

/**
 * Number Converter Component
 * Allows users to type any number and see its Arabic translation with audio
 */
export default function NumberConverter({ arabicNumbersMap }) {
  const [inputNumber, setInputNumber] = useState('')
  const [result, setResult] = useState(null)

  // Helper function to convert number to Arabic-Indic numerals
  const toArabicIndic = (num) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
    return num.toString().split('').map(digit => arabicDigits[parseInt(digit)]).join('')
  }

  const handleConvert = () => {
    const num = parseInt(inputNumber)
    
    if (isNaN(num) || num < 0 || inputNumber.trim() === '') {
      setResult(null)
      return
    }

    // Check if we have the number in our predefined list (0-100)
    const found = arabicNumbersMap[num]
    
    if (found) {
      setResult({
        number: num.toString(),
        arabicNumber: found.arabicNumber,
        arabicName: found.arabicName,
        english: found.english,
        bangla: found.bangla,
        hasFullTranslation: true
      })
    } else {
      // For numbers beyond 100, generate Arabic-Indic numeral
      const arabicIndic = toArabicIndic(num)
      // Format number with commas for readability
      const formattedNumber = num.toLocaleString()
      setResult({
        number: formattedNumber,
        arabicNumber: arabicIndic,
        arabicName: null, // We don't have Arabic names for numbers > 100
        english: formattedNumber,
        bangla: formattedNumber,
        hasFullTranslation: false,
        // Use Arabic-Indic numeral for audio playback
        audioText: arabicIndic
      })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConvert()
    }
  }

  return (
    <div className="number-converter-wrapper">
      <div className="number-converter">
        <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
          সংখ্যা রূপান্তরকারী (Number Converter)
        </h3>
        <p style={{ marginBottom: '1rem', fontSize: '0.95rem', color: 'var(--text-light)' }}>
          যেকোনো সংখ্যা লিখুন এবং এর আরবি রূপ, ইংরেজি ও বাংলা উচ্চারণ দেখুন:
        </p>
        
        <div className="number-converter-input-group">
          <input
            type="number"
            value={inputNumber}
            onChange={(e) => {
              setInputNumber(e.target.value)
              setResult(null)
            }}
            onKeyPress={handleKeyPress}
            placeholder="সংখ্যা লিখুন (Enter number)"
            className="number-converter-input"
            min="0"
            step="1"
          />
          <button
            onClick={handleConvert}
            className="number-converter-btn"
            disabled={!inputNumber || inputNumber.trim() === '' || isNaN(parseInt(inputNumber)) || parseInt(inputNumber) < 0}
          >
            রূপান্তর করুন
          </button>
        </div>

        {result && (
          <div className="number-converter-result">
            <div className="number-converter-result-header">
              <div className="number-converter-arabic-number">{result.arabicNumber}</div>
              <div className="number-converter-audio">
                <AudioPlayer 
                  arabicText={result.arabicName || result.audioText || result.arabicNumber} 
                  className="number-converter-audio-btn"
                  tone="default"
                />
              </div>
            </div>
            
            <div className="number-converter-details">
              <div className="number-converter-detail-item">
                <strong>সংখ্যা:</strong> {result.number}
              </div>
              {result.arabicName && (
                <div className="number-converter-detail-item">
                  <strong>আরবি নাম:</strong> {result.arabicName}
                </div>
              )}
              {!result.hasFullTranslation && (
                <div className="number-converter-detail-item" style={{ fontStyle: 'italic', color: 'var(--text-light)' }}>
                  <strong>নোট:</strong> এই সংখ্যার জন্য আরবি নাম উপলব্ধ নেই। শুধুমাত্র আরবি-ইন্ডিক সংখ্যা দেখানো হচ্ছে।
                </div>
              )}
              <div className="number-converter-detail-item">
                <strong>ইংরেজি:</strong> {result.english}
              </div>
              <div className="number-converter-detail-item">
                <strong>বাংলা:</strong> {result.bangla}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
