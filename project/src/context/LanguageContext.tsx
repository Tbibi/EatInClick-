import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.startTrial': 'Start Free Trial',
    'hero.title1': 'Supercharge your',
    'hero.title2': "restaurant's growth",
    'hero.description': 'Transform your restaurant with our powerful online ordering system. Boost sales, streamline operations, and delight your customers.',
    'hero.startTrial': 'Start free trial',
    'hero.watchDemo': 'Watch demo',
    'features.title': 'Features',
    'features.subtitle': 'Everything you need to succeed online',
    'features.description': 'Powerful tools to help you manage orders, delight customers, and grow your restaurant business.',
    'pricing.title': 'Simple, transparent pricing',
    'pricing.subtitle': 'Choose the plan that best fits your restaurant',
    'testimonials.title': 'Loved by restaurants worldwide',
    'testimonials.subtitle': 'See what restaurant owners say about our platform'
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.testimonials': 'Témoignages',
    'nav.startTrial': 'Essai Gratuit',
    'hero.title1': 'Développez votre',
    'hero.title2': 'restaurant',
    'hero.description': 'Transformez votre restaurant avec notre système de commande en ligne puissant. Augmentez vos ventes, optimisez vos opérations et ravissez vos clients.',
    'hero.startTrial': 'Commencer l\'essai gratuit',
    'hero.watchDemo': 'Voir la démo',
    'features.title': 'Fonctionnalités',
    'features.subtitle': 'Tout ce dont vous avez besoin pour réussir en ligne',
    'features.description': 'Des outils puissants pour vous aider à gérer les commandes, satisfaire les clients et développer votre restaurant.',
    'pricing.title': 'Prix simples et transparents',
    'pricing.subtitle': 'Choisissez le plan qui convient le mieux à votre restaurant',
    'testimonials.title': 'Adoré par les restaurants du monde entier',
    'testimonials.subtitle': 'Découvrez ce que les restaurateurs disent de notre plateforme'
  },
  ar: {
    'nav.features': 'المميزات',
    'nav.pricing': 'الأسعار',
    'nav.testimonials': 'آراء العملاء',
    'nav.startTrial': 'ابدأ تجربة مجانية',
    'hero.title1': 'عزز نمو',
    'hero.title2': 'مطعمك',
    'hero.description': 'حول مطعمك مع نظامنا القوي للطلب عبر الإنترنت. زيادة المبيعات، تحسين العمليات، وإسعاد عملائك.',
    'hero.startTrial': 'ابدأ تجربة مجانية',
    'hero.watchDemo': 'شاهد العرض',
    'features.title': 'المميزات',
    'features.subtitle': 'كل ما تحتاجه للنجاح عبر الإنترنت',
    'features.description': 'أدوات قوية لمساعدتك في إدارة الطلبات، إسعاد العملاء، وتنمية أعمال مطعمك.',
    'pricing.title': 'أسعار بسيطة وشفافة',
    'pricing.subtitle': 'اختر الخطة التي تناسب مطعمك',
    'testimonials.title': 'محبوب من المطاعم حول العالم',
    'testimonials.subtitle': 'شاهد ما يقوله أصحاب المطاعم عن منصتنا'
  }
};