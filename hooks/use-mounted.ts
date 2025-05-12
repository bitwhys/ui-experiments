import { useCallback, useEffect, useRef } from 'react'

/**
 * Hook that tracks whether a component is currently mounted.
 * Useful for preventing state updates on unmounted components.
 *
 * @returns A ref object containing the current mount state
 */
export function useMounted() {
  // Use ref to avoid triggering re-renders when mounted state changes
  const isMounted = useRef(false)

  useEffect(() => {
    // Mark as mounted after initial render is complete
    isMounted.current = true

    // Clean up function runs when component unmounts
    return () => {
      isMounted.current = false
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return useCallback(() => isMounted.current, [])
}
