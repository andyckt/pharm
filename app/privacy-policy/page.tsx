"use client"

import Link from "next/link"
import { PillIcon as Capsule, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Capsule className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">{t("pharmacist.name")}</span>
          </div>
          <LanguageToggle />
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-12 px-4 md:px-6">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="pl-0 flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter mb-6">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">Last Updated: March 6, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Pharmacist Yan ("we," "our," or "us") respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our free pharmacy consultation services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you
                provide when scheduling a consultation.
              </li>
              <li>
                <strong>Health Information:</strong> Information about your medications, medical conditions, allergies,
                and other health-related information you share during consultations.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you use our services, including consultation
                frequency and topics discussed.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To provide and maintain our pharmacy consultation services</li>
              <li>To schedule and conduct consultations</li>
              <li>To provide personalized medication advice</li>
              <li>To improve our services</li>
              <li>To communicate with you about your consultations</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing and Disclosure</h2>
            <p>
              We take your privacy seriously and do not sell, rent, or share your personal information with third
              parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                <strong>With Your Consent:</strong> We may share your information with healthcare providers with your
                explicit consent.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>Emergency Situations:</strong> We may share your information in an emergency situation if we
                believe it necessary to protect your vital interests or those of another person.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">HIPAA Compliance</h2>
            <p>
              As a healthcare provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA).
              We maintain appropriate physical, technical, and administrative safeguards to protect your health
              information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us via email or during your
              consultation.
            </p>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex justify-center w-full">
            <div className="flex items-center gap-2">
              <Capsule className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">Pharmacist Yan, dedicated in helping the community</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start md:items-center">
            <p className="text-sm text-gray-500">© 2025 Pharmacist Yan. All rights reserved.</p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:underline underline-offset-4"
                onClick={() => {
                  // Add a small timeout to ensure navigation happens first
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-500 hover:underline underline-offset-4"
                onClick={() => {
                  // Add a small timeout to ensure navigation happens first
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
