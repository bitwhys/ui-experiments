import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // This function safely gets the value and only runs on the client
  const readValue = (): T => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }

  // Initialize with initialValue during SSR, and real value during CSR
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // Once mounted on client, read from localStorage
  useEffect(() => {
    setStoredValue(readValue())
  }, [])

  // Sync to localStorage when value changes (client-side only)
  useEffect(() => {
    // Skip the first render on the server
    if (typeof window === 'undefined') {
      return
    }

    // Skip synchronization if the value is still the initialValue
    // (which means we haven't loaded from localStorage yet)
    if (storedValue === initialValue && !document.hasFocus()) {
      return
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error)
    }
  }, [key, storedValue, initialValue])

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
    } catch (error) {
      console.warn(`Error processing setValue for localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
