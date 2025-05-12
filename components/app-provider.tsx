'use client'

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'

import { siteConfig } from '@/config/site'
import { Theme, ThemeAccentColor, ThemeGrayColor } from '@/lib/types'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useMounted } from '@/hooks/use-mounted'

// Provider props
export type AppProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  defaultThemeAccentColor?: ThemeAccentColor
  defaultThemeGrayColor?: ThemeGrayColor
}

// State exposed through context
export type AppProviderState = {
  previousPath?: string
  accentColor?: ThemeAccentColor
  grayColor?: ThemeGrayColor
  setAccentColor: (color: ThemeAccentColor) => void
  setGrayColor: (color: ThemeGrayColor) => void
}

const initialState: AppProviderState = {
  previousPath: undefined,
  accentColor: undefined,
  grayColor: undefined,
  setAccentColor: () => null,
  setGrayColor: () => null,
}

// Because pathname is state to the router and we don't want
// unnecessary rerenders on route change we create a helper to
// capture its value as a React ref.
function usePrevious<T>(value: T) {
  let ref = useRef<T>(value)

  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

// FIXME: we might need to move to component
function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }
    // trigger a check when component mounts
    onMediaChange()
    media.addEventListener('change', onMediaChange)

    // make sure we clean up listener on unmount
    return () => media.removeEventListener('change', onMediaChange)
  }, [resolvedTheme, setTheme])

  return null
}

export const AppContext = createContext<AppProviderState>(initialState)

export const AppProvider = ({
  children,
  defaultTheme = siteConfig.theme.defaultTheme,
  defaultThemeAccentColor = siteConfig.theme.defaultThemeAccentColor,
  defaultThemeGrayColor = siteConfig.theme.defaultThemeGrayColor,
}: AppProviderProps) => {
  const [accentColor, setAccentColor] = useLocalStorage(
    'creight-theme-accent-color',
    defaultThemeAccentColor,
  )
  const [grayColor, setGrayColor] = useLocalStorage(
    'creight-theme-gray-color',
    defaultThemeGrayColor,
  )
  let pathName = usePathname()
  let previousPath = usePrevious(pathName)
  const isMounted = useMounted()

  // maybe load settings like in ($PROJECTS/@labs/ui), for now just set mounted state
  // useEffect(() => {}, [])

  // Apply theme and density to document
  useEffect(() => {
    if (!isMounted()) return

    const root = window.document.documentElement

    // set class 'namespace' to make themes work
    root.classList.add(siteConfig.themeNamespace)
    // set theme color attributes
    root.setAttribute('data-accent-color', defaultThemeAccentColor)
    root.setAttribute('data-gray-color', defaultThemeGrayColor)
  }, [])

  const value: AppProviderState = {
    previousPath,
    accentColor,
    grayColor,
    setAccentColor,
    setGrayColor,
  }
  return (
    <AppContext.Provider value={value}>
      <ThemeProvider
        attribute="class"
        defaultTheme={defaultTheme}
        enableSystem
        disableTransitionOnChange
        storageKey="creight-theme"
      >
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
