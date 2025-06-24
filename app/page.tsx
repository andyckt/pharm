"use client"

import Link from "next/link"
import {
  PillIcon as Capsule,
  Calendar,
  Clock,
  Search,
  Heart,
  CheckCircle2,
  Shield,
  Users,
  Star,
  ArrowRight,
  MessageSquare,
} from "lucide-react"
import { useState, useEffect, type FormEvent } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { getCurrentHongKongDate, getNextNDays, formatDateShort, getDayOfWeek, getDateType } from "@/utils/date-utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  // Get translation function
  const { t } = useLanguage()
  const { toast } = useToast()

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTime, setSelectedTime] = useState("")

  // State for dates and selected date
  const [dates, setDates] = useState<
    Array<{
      date: string
      day: string
      type: "weekday" | "weekend"
      fullDate: Date
    }>
  >([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedDateType, setSelectedDateType] = useState<"weekday" | "weekend">("weekend")

  // Initialize dates on component mount
  useEffect(() => {
    const currentDate = getCurrentHongKongDate()
    const nextSevenDays = getNextNDays(currentDate, 7)

    const formattedDates = nextSevenDays.map((date) => ({
      date: formatDateShort(date),
      day: getDayOfWeek(date),
      type: getDateType(date),
      fullDate: date,
    }))

    setDates(formattedDates)

    // Set the first date as selected by default
    if (formattedDates.length > 0) {
      setSelectedDate(formattedDates[0].date)
      setSelectedDateType(formattedDates[0].type)
    }
  }, [])

  // Handle date selection
  const handleDateSelection = (dateInfo: { date: string; type: "weekday" | "weekend" }) => {
    setSelectedDate(dateInfo.date)
    setSelectedDateType(dateInfo.type)
  }

  // Handle time selection
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id === "first-name"
        ? "firstName"
        : id === "last-name"
          ? "lastName"
          : id === "email"
            ? "email"
            : id === "phone"
              ? "phone"
              : id === "service"
                ? "service"
                : id]: value,
    })
  }

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.service !== "" &&
      selectedDate !== null &&
      selectedTime !== ""
    )
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!isFormValid()) {
      toast({
        variant: "destructive",
        title: "Please fill in all fields",
        description: "All fields are required to book a consultation.",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Show success message
      toast({
        variant: "success",
        title: "Consultation Booked!",
        description: `Your consultation has been scheduled for ${selectedDate} at ${selectedTime}.`,
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
      })
      setSelectedTime("")
    }, 1000)
  }

  // Testimonials data
  const testimonials = [
    {
      nameKey: "testimonial.sarah.name",
      roleKey: "testimonial.sarah.role",
      contentKey: "testimonial.sarah.content",
      rating: 5,
    },
    {
      nameKey: "testimonial.michael.name",
      roleKey: "testimonial.michael.role",
      contentKey: "testimonial.michael.content",
      rating: 5,
    },
    {
      nameKey: "testimonial.lisa.name",
      roleKey: "testimonial.lisa.role",
      contentKey: "testimonial.lisa.content",
      rating: 4,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="border-b sticky top-0 z-40 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Capsule className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold">{t("pharmacist.name")}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-brand-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-sm font-medium hover:text-brand-600 transition-colors">
                FAQ
              </Link>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-100 text-brand-900 hover:bg-brand-200/80">
                  <Heart className="h-3.5 w-3.5 mr-1 text-brand-600" />
                  <span>{t("community.initiative")}</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
                    {t("hero.title")}
                  </h1>
                  <p className="text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed max-w-[600px]">
                    {t("hero.description")}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm pt-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4 text-brand-600" />
                    <span>{t("feature.flexible.hours")}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-4 w-4 text-brand-600" />
                    <span>{t("feature.quick.scheduling")}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-brand-600"
                    >
                      <path d="M5 3a2 2 0 0 0-2 2" />
                      <path d="M19 3a2 2 0 0 1 2 2" />
                      <path d="M21 19a2 2 0 0 1-2 2" />
                      <path d="M5 21a2 2 0 0 1-2-2" />
                      <path d="M9 3h1" />
                      <path d="M9 21h1" />
                      <path d="M14 3h1" />
                      <path d="M14 21h1" />
                      <path d="M3 9v1" />
                      <path d="M21 9v1" />
                      <path d="M3 14v1" />
                      <path d="M21 14v1" />
                    </svg>
                    <span>{t("feature.via.facetime")}</span>
                  </div>
                </div>
              </div>
              <div id="booking" className="mx-auto w-full max-w-[500px] lg:max-w-none animate-slideUp">
                <Card className="border-0 shadow-card rounded-xl overflow-hidden">
                  <CardHeader className="bg-brand-50 border-b pb-8">
                    <CardTitle className="text-2xl text-brand-900">{t("booking.title")}</CardTitle>
                    <CardDescription className="text-brand-700">{t("booking.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium leading-none text-gray-700">
                          {t("booking.date.label")}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {dates.map((dateObj) => (
                            <Button
                              key={dateObj.date}
                              type="button"
                              variant="outline"
                              className="date-button border-brand-200 hover:bg-brand-50 hover:border-brand-300 data-[state=selected]:bg-brand-100 data-[state=selected]:border-brand-500 py-3"
                              data-state={dateObj.date === selectedDate ? "selected" : ""}
                              onClick={() => handleDateSelection(dateObj)}
                            >
                              {dateObj.date} <span className="text-gray-500 ml-1">{dateObj.day}</span>
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="time"
                          className="text-sm font-medium leading-none flex justify-between text-gray-700"
                        >
                          <span>{t("booking.time.label")}</span>
                          <span className="text-xs text-brand-600 font-normal">{t("booking.time.availability")}</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { time: "9:00 AM", type: "weekend" },
                            { time: "11:00 AM", type: "weekend" },
                            { time: "1:00 PM", type: "weekend" },
                            { time: "3:00 PM", type: "weekend" },
                            { time: "9:00 PM", type: "weekday" },
                            { time: "10:00 PM", type: "weekday" },
                          ]
                            .filter((timeObj) => timeObj.type === selectedDateType)
                            .map((timeObj) => (
                              <Button
                                key={timeObj.time}
                                type="button"
                                variant="outline"
                                className="date-button border-brand-200 hover:bg-brand-50 hover:border-brand-300 data-[state=selected]:bg-brand-100 data-[state=selected]:border-brand-500"
                                data-state={timeObj.time === selectedTime ? "selected" : ""}
                                onClick={() => handleTimeSelection(timeObj.time)}
                              >
                                {timeObj.time}
                              </Button>
                            ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium leading-none text-gray-700">
                            {t("form.firstname.label")}
                          </label>
                          <Input
                            id="first-name"
                            placeholder={t("form.firstname.placeholder")}
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border-brand-200 focus:border-brand-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium leading-none text-gray-700">
                            {t("form.lastname.label")}
                          </label>
                          <Input
                            id="last-name"
                            placeholder={t("form.lastname.placeholder")}
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border-brand-200 focus:border-brand-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none text-gray-700">
                          {t("form.email.label")}
                        </label>
                        <Input
                          id="email"
                          placeholder={t("form.email.placeholder")}
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-brand-200 focus:border-brand-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none text-gray-700">
                          {t("form.phone.label")}
                        </label>
                        <Input
                          id="phone"
                          placeholder={t("form.phone.placeholder")}
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-brand-200 focus:border-brand-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium leading-none text-gray-700">
                          {t("form.service.label")}
                        </label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-brand-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="">{t("form.service.placeholder")}</option>
                          <option value="medication-review">{t("service.medication.review")}</option>
                          <option value="drug-interaction">{t("service.drug.interaction")}</option>
                          <option value="side-effect">{t("service.side.effect")}</option>
                          <option value="general">{t("service.general")}</option>
                        </select>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="bg-brand-50 border-t">
                    <Button
                      className="w-full bg-brand-600 hover:bg-brand-700 cta-button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t("button.book.consultation")}
                        </span>
                      ) : (
                        t("button.book.consultation")
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-100 text-brand-900 hover:bg-brand-200/80">
                    <Heart className="h-3.5 w-3.5 mr-1 text-brand-600" />
                    <span>{t("community.vision")}</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
                    {t("community.helping.title")}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-1">
                <p className="text-gray-600 text-lg">{t("community.helping.description")}</p>
                <ul className="mt-6 grid gap-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-brand-100 p-2">
                      <Users className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <strong className="font-medium text-gray-900">{t("community.elderly")}</strong>
                      <p className="text-gray-600">{t("community.elderly.description")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-brand-100 p-2">
                      <Shield className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <strong className="font-medium text-gray-900">{t("community.families")}</strong>
                      <p className="text-gray-600">{t("community.families.description")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-brand-100 p-2">
                      <Heart className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <strong className="font-medium text-gray-900">{t("community.underserved")}</strong>
                      <p className="text-gray-600">{t("community.underserved.description")}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-brand-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-100 text-brand-900 hover:bg-brand-200/80">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1 text-brand-600" />
                  <span>{t("services.how.help")}</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                  {t("services.title")}
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                  {t("services.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: t("service.medication.review"),
                  description: t("service.medication.review.description"),
                  icon: <Capsule className="h-10 w-10 text-brand-600 service-icon" />,
                },
                {
                  title: t("service.drug.interaction"),
                  description: t("service.drug.interaction.description"),
                  icon: <Search className="h-10 w-10 text-brand-600 service-icon" />,
                },
                {
                  title: t("service.side.effect"),
                  description: t("service.side.effect.description"),
                  icon: <Shield className="h-10 w-10 text-brand-600 service-icon" />,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="service-card transition-all border-0 bg-white shadow-soft hover:shadow-card card-hover"
                >
                  <CardHeader>
                    <div className="p-3 w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-brand-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="text-brand-600 p-0 hover:text-brand-800 hover:bg-transparent">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-100 text-brand-900 hover:bg-brand-200/80">
                  <Star className="h-3.5 w-3.5 mr-1 text-brand-600" />
                  <span>{t("testimonials.section")}</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
                  {t("testimonials.title")}
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                  {t("testimonials.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="testimonial-card border-0 shadow-soft hover:shadow-card card-hover">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-200"}`}
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                    </div>
                    <p className="text-gray-700 mb-6">"{t(testimonial.contentKey)}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                        {t(testimonial.nameKey).charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">{t(testimonial.nameKey)}</h4>
                        <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-brand-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-brand-100 text-brand-900 hover:bg-brand-200/80">
                  <MessageSquare className="h-3.5 w-3.5 mr-1 text-brand-600" />
                  <span>{t("faq.common.questions")}</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">{t("faq.title")}</h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                  {t("faq.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 mt-12">
              {[
                {
                  question: t("faq.question.free"),
                  answer: t("faq.answer.free"),
                },
                {
                  question: t("faq.question.duration"),
                  answer: t("faq.answer.duration"),
                },
                {
                  question: t("faq.question.prepare"),
                  answer: t("faq.answer.prepare"),
                },
                {
                  question: t("faq.question.prescription"),
                  answer: t("faq.answer.prescription"),
                },
                {
                  question: t("faq.question.confidential"),
                  answer: t("faq.answer.confidential"),
                },
                {
                  question: t("faq.question.facetime"),
                  answer: t("faq.answer.facetime"),
                },
                {
                  question: t("faq.question.qualify"),
                  answer: t("faq.answer.qualify"),
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-soft transition-all duration-300 hover:shadow-card hover:bg-white hover:border-l-4 hover:border-l-brand-500 hover:-translate-y-1 cursor-pointer group"
                >
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-brand-600 transition-colors">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Capsule className="h-6 w-6 text-brand-600" />
              <span className="text-xl font-bold">{t("footer.pharmacist.name")}</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">About Us</h3>
              <p className="text-gray-600">
                Pharmacist Yan provides free pharmacy consultations to help individuals understand their medications and
                manage their health better.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-brand-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-600 hover:text-brand-600">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-600 hover:text-brand-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-600 hover:text-brand-600">
                    Book Consultation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-brand-600"
                    onClick={() => {
                      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                    }}
                  >
                    {t("footer.privacy.policy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-600 hover:text-brand-600"
                    onClick={() => {
                      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                    }}
                  >
                    {t("footer.terms.service")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 mt-2">
            <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
