import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageOption {
  code: 'en' | 'fr' | 'ar';
  label: string;
  nativeLabel: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <Globe className="h-4 w-4 text-red-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.nativeLabel}
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === lang.code
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  } flex items-center justify-between group transition-colors duration-200`}
                  role="menuitem"
                >
                  <span className="flex items-center space-x-2">
                    <span>{lang.label}</span>
                    <span className="text-gray-400 group-hover:text-gray-500">
                      ({lang.nativeLabel})
                    </span>
                  </span>
                  {language === lang.code && (
                    <span className="h-2 w-2 rounded-full bg-red-600"></span>
                  )}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}