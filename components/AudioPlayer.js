'use client'

import { useState, useEffect } from 'react'

export default function AudioPlayer({ arabicText, className = '', tone = 'kid' }) {
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
      
      // Load voices immediately
      loadVoices()
      
      // Some browsers load voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }
      
      // Also try loading after a short delay (some browsers need this)
      setTimeout(loadVoices, 100)
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

    if (!arabicText || arabicText.trim() === '') {
      console.warn('No Arabic text provided for audio playback')
      return
    }

    // Stop any currently playing speech
    window.speechSynthesis.cancel()
    
    // Small delay to ensure cancel is processed
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(arabicText)
      
      // Reload voices to ensure we have the latest list
      const availableVoices = window.speechSynthesis.getVoices()
      setVoices(availableVoices)
      
      // Get female voice
      const femaleVoice = getFemaleVoice()
      
      if (femaleVoice) {
        utterance.voice = femaleVoice
        utterance.lang = femaleVoice.lang
      } else {
        // Fallback to Arabic
        utterance.lang = 'ar-SA'
      }
      
      // "Kid-like" tone: higher pitch + slightly faster (browser voices vary; this is best-effort)
      if (tone === 'kid') {
        utterance.rate = 1.05
        utterance.pitch = 1.8
      } else {
        // Default/softer tone (kept close to previous behavior)
        utterance.rate = 0.9
        utterance.pitch = 1.4
      }
      utterance.volume = 1

      utterance.onstart = () => {
        setIsPlaying(true)
      }
      
      utterance.onend = () => {
        setIsPlaying(false)
      }
      
      utterance.onerror = (event) => {
        setIsPlaying(false)
        console.error('Speech synthesis error:', event)
        // Don't show alert for common errors, just log
        if (event.error !== 'interrupted') {
          console.warn('Audio playback error:', event.error)
        }
      }

      try {
        window.speechSynthesis.speak(utterance)
      } catch (error) {
        console.error('Error starting speech synthesis:', error)
        setIsPlaying(false)
      }
    }, 50)
  }

  const stopAudio = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    }
  }

  // Always show button, but disable if not supported
  return (
    <button
      onClick={isPlaying ? stopAudio : playAudio}
      className={`audio-player-btn ${className}`}
      aria-label={isPlaying ? 'অডিও বন্ধ করুন' : 'অডিও শুনুন'}
      title={isPlaying ? 'অডিও বন্ধ করুন' : isSupported ? 'অডিও শুনুন' : 'অডিও সমর্থন করা হয় না'}
      disabled={!isSupported}
      style={{
        opacity: isSupported ? 1 : 0.5,
        cursor: isSupported ? 'pointer' : 'not-allowed'
      }}
    >
      {isPlaying ? '⏸️' : '🔊'}
    </button>
  )
}

