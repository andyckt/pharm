"use client"

import Link from "next/link"
import { PillIcon as Capsule, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function TermsOfService() {
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

          <h1 className="text-3xl font-bold tracking-tighter mb-6">Terms of Service</h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">Last Updated: March 6, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to Pharmacist Yan's free pharmacy consultation service. These Terms of Service ("Terms") govern
              your use of our consultation services, so please read them carefully before scheduling or participating in
              a consultation.
            </p>
            <p>
              By using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do
              not use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Service Description</h2>
            <p>
              Pharmacist Yan provides free pharmacy consultations via Facetime to help individuals understand their
              medications, identify potential drug interactions, manage side effects, and answer general medication
              questions. Our services are intended to supplement, not replace, the advice, treatment, or diagnosis from
              your primary healthcare providers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eligibility</h2>
            <p>
              Our services are available to everyone, with priority given to the elderly (65+), families experiencing
              financial hardship, and residents of underserved communities with limited access to pharmacy services. By
              using our services, you confirm that you are capable of entering into a legally binding agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Medical Disclaimer</h2>
            <p>
              The information provided during consultations is for informational and educational purposes only. It is
              not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other
              qualified healthcare provider with any questions you may have regarding a medical condition.
            </p>
            <p>
              As a pharmacist, Pharmacist Yan cannot prescribe medications or make changes to your current
              prescriptions. Any recommendations made during consultations should be discussed with your primary
              healthcare provider before implementation.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Consultation Scheduling and Cancellation</h2>
            <p>
              You may schedule consultations through our website. We ask that you provide accurate and complete
              information when scheduling. If you need to cancel or reschedule a consultation, please do so at least 24
              hours in advance to allow others to use the time slot.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
            <p>When using our services, you agree to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                Provide accurate and complete information about your medications, medical conditions, and health history
              </li>
              <li>Inform us of any changes to your medications or health status</li>
              <li>Use our services in a lawful and appropriate manner</li>
              <li>Not record or distribute consultation sessions without explicit permission</li>
              <li>Respect the time allocated for your consultation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics,
              logos, and educational materials, are the exclusive property of Pharmacist Yan and are protected by
              copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Pharmacist Yan shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of
              our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Pharmacist Yan from and against any claims, liabilities,
              damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees)
              arising out of or relating to your violation of these Terms or your use of our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by
              posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our
              services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Hong Kong, without regard to
              its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us via email or during your consultation.</p>
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
