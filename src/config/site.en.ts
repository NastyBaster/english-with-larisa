import type { SiteConfig } from '../types/site';
import { siteConfig } from './site';

export const siteConfigEn: SiteConfig = {
  ...siteConfig,
  seo: {
    title: 'English you can actually use | Private English lessons',
    description:
      'Personalized online English lessons for children and adults, speaking practice, and exam preparation.',
    image: '/og-cover.svg',
  },
  tutor: {
    ...siteConfig.tutor,
    name: 'Larisa',
    role: 'English teacher',
    photoAlt: 'Portrait of an English teacher',
    bio: [
      'I help children and adults understand English, speak with more confidence, and see their own progress.',
      'Lessons combine clear explanations, real conversation practice, and materials shaped around your goals. No shame for mistakes and no learning just for the sake of it.',
    ],
  },
  contact: {
    ...siteConfig.contact,
    messengerLabel: 'Write on Telegram',
  },
  ui: {
    languageLabel: 'Language', switchToEnglish: 'English', switchToUkrainian: 'Українська',
    homeLabel: 'home', navigationLabel: 'Main navigation', contactLabel: 'Contacts',
    privacyLabel: 'Privacy policy', backHomeLabel: '← Back to home',
    aboutEyebrow: 'About the teacher', aboutTitle: 'Hi! I am', directionsEyebrow: 'Lesson options',
    directionsTitle: 'Find the right format for your goal', directionsDescription: 'Every programme adapts to your starting level, pace, and the situations where you need English.',
    factsLabel: 'Why learn with me', resultsEyebrow: 'The result', resultsTitle: 'What will change in your learning',
    resultsDescription: 'I do not promise a magical result in a few lessons. I offer consistent work, a clear focus, and practice instead.',
    processEyebrow: 'How it works', processTitle: 'From your first message to confident progress',
    methodologyEyebrow: 'My approach', methodologyTitle: 'We do not learn rules for their own sake', methodologyDescription: 'We build skills that stay with you beyond the lesson.',
    pricingEyebrow: 'Formats and prices', pricingTitle: 'Choose a comfortable format', pricingDescription: 'Ask about current duration, availability, and the final price in a message.',
    faqTitle: 'Frequently asked questions', faqDescription: 'Did not find an answer? Write to me and we will discuss your situation personally.',
    finalCtaEyebrow: 'Ready to start?', finalCtaTitle: 'Take the first step towards confident English', finalCtaDescription: 'Tell me briefly about your goal. I will suggest a format and the next steps.',
    chooseDirection: 'Choose a lesson option', principle: 'My goal is to create a space where you can ask questions, make mistakes, and gradually feel: “I can do this.”', popularLabel: 'Most popular', detailsLabel: 'Learn more',
  },
  navigation: [
    { label: 'Lessons', href: '#directions' },
    { label: 'About me', href: '#about' },
    { label: 'How it works', href: '#process' },
    { label: 'Prices', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Online English lessons',
    title: 'English you can actually use',
    description:
      'A clear plan, plenty of speaking practice, and support at every step for children, adults, and exam candidates.',
    note: 'Tell me about your goal and I will suggest the best format.',
  },
  facts: [
    { value: '1:1', label: 'attention on your goal' },
    { value: 'Online', label: 'learn from a comfortable place' },
    { value: 'Flexible', label: 'your pace and materials' },
  ],
  directions: [
    {
      icon: 'ABC',
      title: 'English for children',
      description: 'Engaging lessons shaped around age, school needs, and natural curiosity.',
      tags: ['School English', 'Strong foundations'],
    },
    {
      icon: 'Hi!',
      title: 'English for adults',
      description: 'English for work, travel, and everyday life without unnecessary theory or overload.',
      tags: ['From zero', 'Work and life'],
    },
    {
      icon: 'A+',
      title: 'Exam preparation',
      description: 'Structured work with task formats, knowledge gaps, and a preparation strategy.',
      tags: ['NMT', 'School exams'],
    },
    {
      icon: '…',
      title: 'Speaking English',
      description: 'Practice that helps you find words faster, understand others, and stop fearing mistakes.',
      tags: ['Speaking', 'Real vocabulary'],
    },
  ],
  results: [
    'Understand what you are learning and why',
    'Speak more from the very first lessons',
    'Close knowledge gaps without chaotic revision',
    'Have a clear route to your own goal',
  ],
  process: [
    { title: 'We meet', description: 'We discuss your goal, experience, comfortable pace, and preferred format.' },
    { title: 'Find your level', description: 'We identify your strengths and the topics that need attention without stress.' },
    { title: 'Build a plan', description: 'We create a clear route and choose materials for your specific request.' },
    { title: 'Learn and adjust', description: 'We practise, track progress, and update the plan when needed.' },
  ],
  methodology: [
    { title: 'Language in context', description: 'Vocabulary and grammar appear in real situations, not isolated exercises.' },
    { title: 'Active practice', description: 'You spend a meaningful part of each lesson speaking, listening, analysing, and applying new skills.' },
    { title: 'Clear feedback', description: 'You know what already works, what comes next, and how to practise independently.' },
  ],
  pricing: [
    {
      title: 'Individual lesson',
      description: 'A personal pace and programme built around one specific goal.',
      price: 'from 600 UAH',
      unit: 'per lesson',
      features: ['Online', 'Personal materials', 'Feedback'],
      featured: true,
    },
    {
      title: 'Lesson for two',
      description: 'More live interaction for students with a similar level and goals.',
      price: 'from 500 UAH',
      unit: 'per person',
      features: ['Online', '2 students', 'Shared speaking practice'],
    },
  ],
  faq: [
    { question: 'How do lessons work?', answer: 'We meet online in an agreed video service. We use interactive materials, speak, listen, and apply new skills right away.' },
    { question: 'Can I start from zero?', answer: 'Yes. The plan and pace depend on your starting level, goals, and the time you are ready to give learning.' },
    { question: 'How often should I study?', answer: 'One or two lessons a week is usually a comfortable rhythm. We will decide what suits you after discussing your goal.' },
    { question: 'Are there homework tasks?', answer: 'Yes, if agreed. It is short, manageable practice that reinforces the material and helps you move faster.' },
    { question: 'How do I book a lesson?', answer: 'Click “Write on Telegram” and briefly tell me who the lessons are for and your main goal.' },
  ],
};
