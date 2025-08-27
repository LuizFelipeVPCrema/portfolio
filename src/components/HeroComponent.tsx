import React, { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nContext';

const HeroComponent: React.FC = () => {
  const { t } = useI18n();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    // Component initialization
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system';
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
    
    // Escutar mudanças de tema
    const handleThemeChange = (event: CustomEvent) => {
      setCurrentTheme(event.detail.theme);
      console.log('HeroComponent: Tema mudou para', event.detail.theme);
    };
    
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('hero.title.part1')}
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            {t('hero.title.part2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            {t('hero.cta.contact')}
          </button>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-12 animate-fade-in-up animation-delay-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('hero.techStack')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <span className="text-sm font-medium">Angular</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <span className="text-sm font-medium">Astro</span>
            </div>
          </div>
        </div>

        
        </div>
       </section>
    </>
  );
};

export default HeroComponent;
