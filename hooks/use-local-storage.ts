import * as React from 'react'
import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Initialize state with function to avoid duplicate reads
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Check if we already have value in localStorage
      const item = window.localStorage.getItem(key)
      // Return parsed stored json or initialValue if nothing stored
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Synchronize state to localStorage whenever it changes
  // This also handles persisting the initialValue on first render
  useEffect(() => {
    try {
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  // Same setter implementation with functional update support
  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      // Storage sync handled by the useEffect
    } catch (error) {
      console.warn(`Error processing setValue for localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
