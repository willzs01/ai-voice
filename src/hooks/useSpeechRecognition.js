// hooks/useSpeechRecognition.js
"use client"

import { useState, useEffect } from 'react'

export const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [recognition, setRecognition] = useState(null)
  const [interimTranscript, setInterimTranscript] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = 'en-US'

        recognition.onresult = (event) => {
          let currentInterimTranscript = ''
          
          // Get the last result (most recent speech)
          const lastResult = event.results[event.results.length - 1]
          
          if (lastResult.isFinal) {
            // Append the final result to the existing transcript
            setTranscript(prev => prev + ' ' + lastResult[0].transcript.trim())
            setInterimTranscript('')
          } else {
            // Update interim transcript
            currentInterimTranscript = lastResult[0].transcript
            setInterimTranscript(currentInterimTranscript)
          }
        }

        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error)
          if (event.error === 'no-speech' && isListening) {
            try {
              recognition.start()
            } catch (e) {
              // Ignore errors from multiple start calls
            }
          }
        }

        recognition.onend = () => {
          if (isListening) {
            try {
              recognition.start()
            } catch (e) {
              // Ignore errors from multiple start calls
            }
          }
        }

        setRecognition(recognition)
      }
    }

    // Cleanup
    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [isListening])

  const startListening = () => {
    if (recognition) {
      setTranscript('')
      setInterimTranscript('')
      recognition.start()
      setIsListening(true)
    }
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
      setIsListening(false)
      setInterimTranscript('')
    }
  }

  return {
    isListening,
    transcript: transcript.trim(),
    interimTranscript,
    startListening,
    stopListening,
  }
}