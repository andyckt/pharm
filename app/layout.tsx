import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { ClientScripts } from "./client-scripts"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MediConsult - Pharmacy Consultation Services",
  description: "Get expert medication advice from licensed pharmacists through our online consultation service.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ClientScripts />
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
