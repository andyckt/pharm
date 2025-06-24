"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ClientScripts() {
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Set default to Chinese and save it
      setLanguage("zh")
      localStorage.setItem("language", "zh")
    }

    // Add a class to the body when the page is fully loaded
    document.body.classList.add("page-loaded")
  }, [setLanguage])

  // Save language preference whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return null
}
