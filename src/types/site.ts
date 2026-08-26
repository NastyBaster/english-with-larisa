export interface Link {
  label: string;
  href: string;
}

export interface Direction {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PricePlan {
  title: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  context?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  seo: { title: string; description: string; image: string };
  tutor: {
    name: string;
    role: string;
    photo: string | null;
    aboutPhoto: string | null;
    photoAlt: string;
    photoPosition: string;
    aboutPhotoPosition: string;
    bio: string[];
  };
  contact: { messengerUrl: string; messengerLabel: string; email?: string };
  ui: {
    languageLabel: string;
    switchToEnglish: string;
    switchToUkrainian: string;
    homeLabel: string;
    navigationLabel: string;
    contactLabel: string;
    privacyLabel: string;
    backHomeLabel: string;
    aboutEyebrow: string;
    aboutTitle: string;
    directionsEyebrow: string;
    directionsTitle: string;
    directionsDescription: string;
    factsLabel: string;
    resultsEyebrow: string;
    resultsTitle: string;
    resultsDescription: string;
    processEyebrow: string;
    processTitle: string;
    methodologyEyebrow: string;
    methodologyTitle: string;
    methodologyDescription: string;
    pricingEyebrow: string;
    pricingTitle: string;
    pricingDescription: string;
    faqTitle: string;
    faqDescription: string;
    finalCtaEyebrow: string;
    finalCtaTitle: string;
    finalCtaDescription: string;
    chooseDirection: string;
    principle: string;
    popularLabel: string;
    detailsLabel: string;
  };
  navigation: Link[];
  hero: { eyebrow: string; title: string; description: string; note: string };
  facts: Array<{ value: string; label: string }>;
  directions: Direction[];
  results: string[];
  process: Array<{ title: string; description: string }>;
  methodology: Array<{ title: string; description: string }>;
  pricing: PricePlan[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  sections: { facts: boolean; testimonials: boolean; pricing: boolean };
}
