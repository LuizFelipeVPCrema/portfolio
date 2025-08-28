import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';

const LanguageSelector: React.FC = () => {
  const { locale, setLocale, availableLocales, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getLanguageName = (locale: string) => {
    const languageNames: Record<string, string> = {
      'pt-BR': 'Português',
      'en-US': 'English',
      'es-ES': 'Español'
    };
    return languageNames[locale] || locale;
  };

  const getLanguageFlag = (locale: string) => {
    const flags: Record<string, string> = {
      'pt-BR': '🇧🇷',
      'en-US': '🇺🇸',
      'es-ES': '🇪🇸'
    };
    return flags[locale] || '🌐';
  };

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale as any);
    setIsOpen(false);
  };

  return (
    <div className="relative language-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
        aria-label="Select language"
      >
        <span className="text-lg">{getLanguageFlag(locale)}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {getLanguageName(locale)}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-1">
            {availableLocales.map((availableLocale) => (
              <button
                key={availableLocale}
                onClick={() => handleLanguageChange(availableLocale)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  locale === availableLocale 
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{getLanguageFlag(availableLocale)}</span>
                <span>{getLanguageName(availableLocale)}</span>
                {locale === availableLocale && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
