"use client"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const { theme, setTheme } = useNextTheme()

  return {
    theme: theme as "light" | "dark" | "system",
    toggleTheme: () => {
      if (theme === "dark") {
        setTheme("light")
      } else {
        setTheme("dark")
      }
    },
  }
}
