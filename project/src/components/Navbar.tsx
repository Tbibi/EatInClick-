import React from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-red-600">EatInClick</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitcher />
            <a href="#features" className="text-gray-600 hover:text-red-600">{t('nav.features')}</a>
            <a href="#pricing" className="text-gray-600 hover:text-red-600">{t('nav.pricing')}</a>
            <a href="#testimonials" className="text-gray-600 hover:text-red-600">{t('nav.testimonials')}</a>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              {t('nav.startTrial')}
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <LanguageSwitcher />
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-red-600">{t('nav.features')}</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-red-600">{t('nav.pricing')}</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-red-600">{t('nav.testimonials')}</a>
            <button className="w-full text-left px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              {t('nav.startTrial')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}