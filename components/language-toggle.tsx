"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-gray-600 hover:text-brand-600"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "zh" ? "English" : "中文"}</span>
    </Button>
  )
}
