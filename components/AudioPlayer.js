'use client'

import { useState, useEffect } from 'react'

export default function AudioPlayer({ arabicText, className = '' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [voices, setVoices] = useState([])

  useEffect(() => {
    // Check if browser supports SpeechSynthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true)
      
      // Load voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices()
        setVoices(availableVoices)
      }
      
      loadVoices()
      
      // Some browsers load voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }
    }
  }, [])

  const getFemaleVoice = () => {
    if (voices.length === 0) return null

    // First, try to find explicitly female Arabic voices
    let femaleVoice = voices.find(voice => {
      const name = voice.name.toLowerCase()
      const lang = voice.lang.toLowerCase()
      return lang.startsWith('ar') && (
        name.includes('female') ||
        name.includes('zira') ||
        name.includes('hazel') ||
        name.includes('samantha') ||
        name.includes('karen') ||
        name.includes('susan') ||
        name.includes('victoria') ||
        name.includes('nora') ||
        voice.gender === 'female'
      )
    })

    // If no explicit female voice, try to find any Arabic voice and we'll use high pitch
    if (!femaleVoice) {
      femaleVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('ar'))
    }

    // If still no Arabic voice, try English female voices as fallback
    if (!femaleVoice) {
      femaleVoice = voices.find(voice => {
        const name = voice.name.toLowerCase()
        return (
          name.includes('zira') ||
          name.includes('hazel') ||
          name.includes('samantha') ||
          name.includes('karen') ||
          name.includes('susan') ||
          name.includes('victoria') ||
          voice.gender === 'female'
        )
      })
    }

    return femaleVoice
  }

  const playAudio = () => {
    if (!isSupported) {
      alert('আপনার ব্রাউজার অডিও প্লে সমর্থন করে না।')
      return
    }

    // Stop any currently playing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(arabicText)
    
    // Get female voice
    const femaleVoice = getFemaleVoice()
    
    if (femaleVoice) {
      utterance.voice = femaleVoice
      utterance.lang = femaleVoice.lang
    } else {
      // Fallback to Arabic
      utterance.lang = 'ar-SA'
    }
    
    // Higher pitch and rate for more feminine sound
    utterance.rate = 0.85 // Slightly slower for clarity
    utterance.pitch = 1.4 // Much higher pitch for female voice (1.0 is default, 2.0 is max)
    utterance.volume = 1

    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => {
      setIsPlaying(false)
      alert('অডিও প্লে করতে সমস্যা হয়েছে।')
    }

    window.speechSynthesis.speak(utterance)
  }

  const stopAudio = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <button
      onClick={isPlaying ? stopAudio : playAudio}
      className={`audio-player-btn ${className}`}
      aria-label={isPlaying ? 'অডিও বন্ধ করুন' : 'অডিও শুনুন'}
      title={isPlaying ? 'অডিও বন্ধ করুন' : 'অডিও শুনুন'}
    >
      {isPlaying ? '⏸️' : '🔊'}
    </button>
  )
}

