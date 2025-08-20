import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const themeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const getInitialTheme = () => {
        const fromStorage = localStorage.getItem('theme')
        if (fromStorage === 'light' || fromStorage === 'dark') return fromStorage
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
    }

    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const handler = (e) => {
            const stored = localStorage.getItem('theme')
            if (stored) return
            setTheme(e.matches ? 'dark' : 'light')
        }
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        mq.addEventListener?.('change', handler)
        return () => mq.removeEventListener?.('change', handler)
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }, [])

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}


