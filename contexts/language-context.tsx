"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface Translation {
  [key: string]: {
    en: string
    zh: string
  }
}

const translations: Translation = {
  // Header and common elements
  "pharmacist.name": {
    en: "Pharmacist Yan",
    zh: "Pharmacist Yan", // Keeping in English as requested
  },
  "language.toggle": {
    en: "中文",
    zh: "English",
  },

  // Navigation
  "nav.services": {
    en: "Services",
    zh: "服務",
  },
  "nav.testimonials": {
    en: "Testimonials",
    zh: "患者評價",
  },
  "nav.faq": {
    en: "FAQ",
    zh: "常見問題",
  },
  "nav.book.now": {
    en: "Book Now",
    zh: "立即預約",
  },

  // Hero section
  "community.initiative": {
    en: "Community Health Initiative",
    zh: "社區健康計劃",
  },
  "hero.title": {
    en: "Your Family Pharmacist",
    zh: "您的家庭藥劑師",
  },
  "hero.description": {
    en: "A family pharmacist is someone who knows your medical history, understands your medication needs, and provides personalized care for your entire family. I'm here to offer guidance, answer your questions, and ensure your medications are safe and effective through convenient Facetime consultations.",
    zh: "家庭藥劑師是了解您的醫療歷史、理解您的用藥需求，並為您全家提供個性化護理的專業人士。我在這裡通過便捷的Facetime諮詢，為您提供指導、回答您的問題，並確保您的藥物安全有效。",
  },
  "button.watch.guides": {
    en: "Watch Medication Guides",
    zh: "觀看用藥指南",
  },
  "feature.flexible.hours": {
    en: "Flexible Hours",
    zh: "靈活時間",
  },
  "feature.quick.scheduling": {
    en: "Quick Scheduling",
    zh: "快速預約",
  },
  "feature.via.facetime": {
    en: "Via Facetime",
    zh: "通過Facetime",
  },

  // Booking form
  "booking.title": {
    en: "Book Your Free Consultation",
    zh: "預約您的免費諮詢",
  },
  "booking.description": {
    en: "Select a date and time that works for you",
    zh: "選擇適合您的日期和時間",
  },
  "booking.date.label": {
    en: "Available Dates",
    zh: "可用日期",
  },
  "booking.time.label": {
    en: "Available Times",
    zh: "可用時間",
  },
  "booking.time.availability": {
    en: "Weekdays: 9PM onwards | Weekends: Flexible hours",
    zh: "工作日：晚上9點後 | 週末：靈活時間",
  },
  "form.firstname.label": {
    en: "First name",
    zh: "名字",
  },
  "form.firstname.placeholder": {
    en: "Enter your first name",
    zh: "輸入您的名字",
  },
  "form.lastname.label": {
    en: "Last name",
    zh: "姓氏",
  },
  "form.lastname.placeholder": {
    en: "Enter your last name",
    zh: "輸入您的姓氏",
  },
  "form.email.label": {
    en: "Email",
    zh: "電子郵件",
  },
  "form.email.placeholder": {
    en: "Enter your email",
    zh: "輸入您的電子郵件",
  },
  "form.phone.label": {
    en: "Phone",
    zh: "電話",
  },
  "form.phone.placeholder": {
    en: "Enter your phone number",
    zh: "輸入您的電話號碼",
  },
  "form.service.label": {
    en: "What help do you need?",
    zh: "您需要什麼幫助？",
  },
  "form.service.placeholder": {
    en: "Select a service",
    zh: "選擇服務",
  },
  "button.book.consultation": {
    en: "Book Free Consultation",
    zh: "預約免費諮詢",
  },

  // Community section
  "community.vision": {
    en: "Our Community Vision",
    zh: "我們的社區願景",
  },
  "community.helping.title": {
    en: "Helping Those Who Need It Most",
    zh: "幫助最需要幫助的人",
  },
  "community.helping.description": {
    en: "I believe everyone deserves access to quality pharmaceutical advice, regardless of financial situation. This free consultation service is my way of giving back to our community, specifically designed to help:",
    zh: "我相信每個人都應該獲得高質量的藥物建議，無論其經濟狀況如何。這項免費諮詢服務是我回饋社區的方式，專門設計用於幫助：",
  },
  "community.elderly": {
    en: "Elderly neighbors",
    zh: "老年鄰居",
  },
  "community.elderly.description": {
    en: "who may have complex medication needs and limited access to transportation",
    zh: "可能有複雜的用藥需求和有限的交通條件",
  },
  "community.families": {
    en: "Families struggling financially",
    zh: "經濟困難的家庭",
  },
  "community.families.description": {
    en: "who cannot afford traditional healthcare services",
    zh: "無法負擔傳統醫療服務",
  },
  "community.underserved": {
    en: "Members of underserved communities",
    zh: "服務不足社區的成員",
  },
  "community.underserved.description": {
    en: "with limited access to pharmacy services",
    zh: "獲取藥房服務的機會有限",
  },

  // Services section
  "services.how.help": {
    en: "How I Can Help",
    zh: "我如何提供幫助",
  },
  "services.title": {
    en: "Free Pharmacy Services",
    zh: "免費藥房服務",
  },
  "services.description": {
    en: "I offer these consultation services at no cost to help you manage your medications effectively.",
    zh: "我提供這些免費諮詢服務，幫助您有效管理您的藥物。",
  },
  "service.medication.review": {
    en: "Medication Review",
    zh: "藥物審查",
  },
  "service.medication.review.description": {
    en: "I'll comprehensively review all your medications to ensure they work well together.",
    zh: "我將全面審查您的所有藥物，確保它們能夠很好地協同工作。",
  },
  "service.drug.interaction": {
    en: "Drug Interaction Check",
    zh: "藥物相互作用檢查",
  },
  "service.drug.interaction.description": {
    en: "I'll identify potential interactions between your medications and supplements.",
    zh: "我將識別您的藥物和補充劑之間的潛在相互作用。",
  },
  "service.side.effect": {
    en: "Side Effect Management",
    zh: "副作用管理",
  },
  "service.side.effect.description": {
    en: "I'll provide advice on managing medication side effects and minimizing discomfort.",
    zh: "我將提供關於管理藥物副作用和減輕不適的建議。",
  },
  "service.general": {
    en: "General Medication Questions",
    zh: "一般藥物問題",
  },
  "button.watch.related.videos": {
    en: "Watch related videos",
    zh: "觀看相關視頻",
  },

  // Educational resources section
  "guides.educational.resources": {
    en: "Educational Resources",
    zh: "教育資源",
  },
  "guides.title": {
    en: "Medication Guides",
    zh: "用藥指南",
  },
  "guides.description": {
    en: "Watch these educational videos to learn more about different types of medications, important tips, and warnings.",
    zh: "觀看這些教育視頻，了解更多關於不同類型藥物的信息、重要提示和警告。",
  },
  "guides.important.info": {
    en: "Important health information",
    zh: "重要健康信息",
  },

  // Video categories
  "video.heart.health": {
    en: "Heart Health",
    zh: "心臟健康",
  },
  "video.diabetes.management": {
    en: "Diabetes Management",
    zh: "糖尿病管理",
  },
  "video.pain.management": {
    en: "Pain Management",
    zh: "疼痛管理",
  },
  "video.infection.treatment": {
    en: "Infection Treatment",
    zh: "感染治療",
  },
  "video.medication.safety": {
    en: "Medication Safety",
    zh: "用藥安全",
  },
  "video.geriatric.care": {
    en: "Geriatric Care",
    zh: "老年護理",
  },

  // Video titles and descriptions
  "video.blood.pressure.title": {
    en: "Understanding Blood Pressure Medications",
    zh: "了解血壓藥物",
  },
  "video.blood.pressure.description": {
    en: "Learn about different types of blood pressure medications, how they work, and important considerations.",
    zh: "了解不同類型的血壓藥物，它們的工作原理以及重要注意事項。",
  },
  "video.diabetes.title": {
    en: "Diabetes Medications Explained",
    zh: "糖尿病藥物解釋",
  },
  "video.diabetes.description": {
    en: "A comprehensive guide to diabetes medications, including insulin and oral medications.",
    zh: "糖尿病藥物的綜合指南，包括胰島素和口服藥物。",
  },
  "video.pain.title": {
    en: "Pain Management Options",
    zh: "疼痛管理選項",
  },
  "video.pain.description": {
    en: "Explore different pain management medications and their appropriate uses.",
    zh: "探索不同的疼痛管理藥物及其適當用途。",
  },
  "video.antibiotic.title": {
    en: "Antibiotic Use and Misuse",
    zh: "抗生素的使用和濫用",
  },
  "video.antibiotic.description": {
    en: "Important information about antibiotics, when they're needed, and why overuse is dangerous.",
    zh: "關於抗生素的重要信息，何時需要它們，以及為什麼過度使用是危險的。",
  },
  "video.side.effects.title": {
    en: "Managing Medication Side Effects",
    zh: "管理藥物副作用",
  },
  "video.side.effects.description": {
    en: "Tips and strategies for managing common medication side effects.",
    zh: "管理常見藥物副作用的技巧和策略。",
  },
  "video.seniors.title": {
    en: "Medication Safety for Seniors",
    zh: "老年人用藥安全",
  },
  "video.seniors.description": {
    en: "Special considerations for medication use in older adults.",
    zh: "老年人用藥的特殊考慮因素。",
  },

  // About section
  "about.me": {
    en: "About Me",
    zh: "關於我",
  },
  "about.title": {
    en: "Meet Pharmacist Yan",
    zh: "認識 Pharmacist Yan", // Keeping in English as requested
  },
  "about.description": {
    en: "As a certified pharmacist with a passion for helping people in underserved communities, I'm dedicated to providing accessible and quality pharmaceutical care to everyone who needs it.",
    zh: "作為一名熱衷於幫助服務不足社區人們的認證藥劑師，我致力於為所有需要的人提供可獲得的高質量藥物護理。",
  },
  "about.education": {
    en: "Certified Pharmacist with Bachelor and Master of Pharmacy from The Chinese University of Hong Kong",
    zh: "香港中文大學藥學學士和碩士學位的認證藥劑師",
  },
  "about.work": {
    en: "Currently working as a pharmacist at Mannings, a global chain pharmacy store in Hong Kong",
    zh: "目前在香港的全球連鎖藥店萬寧擔任藥劑師",
  },
  "about.passion": {
    en: "Passionate about providing accessible healthcare to everyone in our community",
    zh: "熱衷於為我們社區的每個人提供可獲得的醫療保健",
  },
  "about.alt.text": {
    en: "Pharmacist Yan standing in front of a historic university building",
    zh: "Pharmacist Yan 站在一座歷史悠久的大學建築前", // Keeping name in English as requested
  },

  // FAQ section
  "faq.common.questions": {
    en: "Common Questions",
    zh: "常見問題",
  },
  "faq.title": {
    en: "Frequently Asked Questions",
    zh: "常見問題解答",
  },
  "faq.description": {
    en: "Find answers to common questions about my free pharmacy consultation service.",
    zh: "查找有關我的免費藥房諮詢服務的常見問題的答案。",
  },
  "faq.question.free": {
    en: "Is the consultation really free?",
    zh: "諮詢真的是免費的嗎？",
  },
  "faq.answer.free": {
    en: "Yes, my consultations are completely free of charge. This is my way of giving back to the community and ensuring everyone has access to pharmaceutical advice, regardless of their financial situation.",
    zh: "是的，我的諮詢完全免費。這是我回饋社區的方式，確保每個人都能獲得藥物建議，無論其經濟狀況如何。",
  },
  "faq.question.duration": {
    en: "How long does a typical consultation take?",
    zh: "典型的諮詢需要多長時間？",
  },
  "faq.answer.duration": {
    en: "Most consultations last between 30-45 minutes, depending on the complexity of your medication regimen and the specific concerns you'd like to discuss.",
    zh: "大多數諮詢持續30-45分鐘，取決於您的用藥方案的複雜性和您想討論的具體問題。",
  },
  "faq.question.prepare": {
    en: "Do I need to prepare anything for my consultation?",
    zh: "我需要為諮詢準備什麼嗎？",
  },
  "faq.answer.prepare": {
    en: "Yes, please have all your current medications (prescription and over-the-counter), supplements, and vitamins available during the consultation. A list of any allergies or adverse reactions you've experienced is also helpful.",
    zh: "是的，請在諮詢期間準備好您當前的所有藥物（處方藥和非處方藥）、補充劑和維生素。您經歷過的任何過敏或不良反應的清單也很有幫助。",
  },
  "faq.question.prescription": {
    en: "Can I get a prescription during the consultation?",
    zh: "我可以在諮詢期間獲得處方嗎？",
  },
  "faq.answer.prescription": {
    en: "As a pharmacist, I cannot prescribe medications, but I can provide recommendations that you can discuss with your doctor. I can also contact your doctor directly if I identify any concerns that need immediate attention.",
    zh: "作為藥劑師，我不能開處方藥，但我可以提供建議，您可以與醫生討論。如果我發現任何需要立即關注的問題，我也可以直接聯繫您的醫生。",
  },
  "faq.question.confidential": {
    en: "Is my medical information kept confidential?",
    zh: "我的醫療信息是否保密？",
  },
  "faq.answer.confidential": {
    en: "Absolutely. I adhere to strict privacy policies and comply with all HIPAA regulations to ensure your medical information remains confidential and secure.",
    zh: "絕對是。我遵守嚴格的隱私政策，並遵守所有HIPAA法規，確保您的醫療信息保持機密和安全。",
  },
  "faq.question.facetime": {
    en: "How do the Facetime consultations work?",
    zh: "Facetime諮詢是如何工作的？",
  },
  "faq.answer.facetime": {
    en: "Once you request a consultation, I'll contact you to schedule a convenient time. You'll need an Apple device with Facetime or we can arrange an alternative video call option. During the call, I'll discuss your medications, answer questions, and provide personalized advice.",
    zh: "一旦您請求諮詢，我會聯繫您安排一個方便的時間。您需要一台帶有Facetime的Apple設備，或者我們可以安排其他視頻通話選項。在通話期間，我將討論您的藥物，回答問題，並提供個性化建議。",
  },
  "faq.question.qualify": {
    en: "Who qualifies for this free service?",
    zh: "誰有資格獲得這項免費服務？",
  },
  "faq.answer.qualify": {
    en: "Everyone qualifies! While I aim to help everyone in our community, I do prioritize the elderly (65+), families experiencing financial hardship, and residents of underserved communities with limited access to pharmacy services.",
    zh: "每個人都有資格！雖然我的目標是幫助我們社區中的每個人，但我確實優先考慮老年人（65歲以上）、經歷經濟困難的家庭以及獲得藥房服務有限的服務不足社區的居民。",
  },

  // Testimonials section
  "testimonials.title": {
    en: "What Our Patients Say",
    zh: "我們的患者怎麼說",
  },
  "testimonials.description": {
    en: "Hear from people who have benefited from our free consultation services",
    zh: "聽聽從我們的免費諮詢服務中受益的人們的心聲",
  },
  "testimonials.section": {
    en: "Testimonials",
    zh: "患者評價",
  },
  "testimonial.sarah.name": {
    en: "Sarah Chen",
    zh: "陳詠詩",
  },
  "testimonial.sarah.role": {
    en: "Patient",
    zh: "患者",
  },
  "testimonial.sarah.content": {
    en: "Pharmacist Yan helped me understand my medications and identified a potential interaction I wasn't aware of. The consultation was thorough and very helpful.",
    zh: "藥劑師嚴幫助我了解我的藥物，並發現了我不知道的潛在相互作用。諮詢非常徹底且很有幫助。",
  },
  "testimonial.michael.name": {
    en: "Michael Wong",
    zh: "黃志明",
  },
  "testimonial.michael.role": {
    en: "Caregiver",
    zh: "照顧者",
  },
  "testimonial.michael.content": {
    en: "As someone caring for an elderly parent, this free consultation service has been invaluable. The advice was clear and practical.",
    zh: "作為照顧老年父母的人，這項免費諮詢服務非常寶貴。建議清晰且實用。",
  },
  "testimonial.lisa.name": {
    en: "Lisa Tam",
    zh: "譚嘉怡",
  },
  "testimonial.lisa.role": {
    en: "Patient",
    zh: "患者",
  },
  "testimonial.lisa.content": {
    en: "I was experiencing side effects from my medication and didn't know what to do. The consultation helped me manage them effectively.",
    zh: "我正在經歷藥物的副作用，不知道該怎麼辦。諮詢幫助我有效地管理它們。",
  },

  // Footer
  "footer.pharmacist.name": {
    en: "Pharmacist Yan, dedicated in helping the community",
    zh: "Pharmacist Yan, dedicated in helping the community", // Keeping in English as requested
  },
  "footer.about.us": {
    en: "About Us",
    zh: "關於我們",
  },
  "footer.about.description": {
    en: "Pharmacist Yan provides free pharmacy consultations to help individuals understand their medications and manage their health better.",
    zh: "藥劑師嚴提供免費藥房諮詢，幫助個人理解他們的藥物並更好地管理他們的健康。",
  },
  "footer.quick.links": {
    en: "Quick Links",
    zh: "快速鏈接",
  },
  "footer.link.services": {
    en: "Services",
    zh: "服務",
  },
  "footer.link.testimonials": {
    en: "Testimonials",
    zh: "患者評價",
  },
  "footer.link.faq": {
    en: "FAQ",
    zh: "常見問題",
  },
  "footer.link.book": {
    en: "Book Consultation",
    zh: "預約諮詢",
  },
  "footer.legal": {
    en: "Legal",
    zh: "法律信息",
  },
  "footer.copyright": {
    en: "© 2025 Pharmacist Yan. All rights reserved.",
    zh: "© 2025 Pharmacist Yan. 保留所有權利。", // Keeping name in English as requested
  },
  "footer.privacy.policy": {
    en: "Privacy Policy",
    zh: "隱私政策",
  },
  "footer.terms.service": {
    en: "Terms of Service",
    zh: "服務條款",
  },
}

interface LanguageContextProps {
  language: string
  setLanguage: (language: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "zh", // Default to Chinese
  setLanguage: () => {},
  t: (key: string) => key, // Default implementation
})

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("zh") // Default to Chinese

  const t = useCallback(
    (key: string): string => {
      const translation = translations[key as keyof typeof translations]
      if (translation) {
        return translation[language as keyof typeof translation] || translation["en"] || key // Fallback to English if translation is missing
      }
      return key // Return the key if translation is not found
    },
    [language],
  )

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextProps => {
  return useContext(LanguageContext)
}
