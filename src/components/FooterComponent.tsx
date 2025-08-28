import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';

interface FooterSection {
  title: string;
  links: { name: string; href: string }[];
}

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

const FooterComponent: React.FC = () => {
  const { t } = useI18n();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');
  const currentYear = new Date().getFullYear();

  // Get footer links from translations
  const getFooterLinksFromTranslations = () => {
    try {
      return {
        sections: [
          {
            title: t('footer.sections.navigation'),
            links: [
              { name: t('navigation.home'), href: '#hero' },
              { name: t('navigation.about'), href: '#about' },
              { name: t('navigation.skills'), href: '#skills' },
              { name: t('navigation.projects'), href: '#projects' },
              { name: t('navigation.contact'), href: '#contact' }
            ]
          },
          {
            title: t('footer.sections.services'),
            links: [
              { name: t('footer.services.webDevelopment'), href: '#services' },
              { name: t('footer.services.mobileApps'), href: '#services' },
              { name: t('footer.services.consulting'), href: '#services' },
              { name: t('footer.services.uiuxDesign'), href: '#services' }
            ]
          },
          {
            title: t('footer.sections.technologies'),
            links: [
              { name: 'React', href: '#skills' },
              { name: 'Angular', href: '#skills' },
              { name: 'Node.js', href: '#skills' },
              { name: 'TypeScript', href: '#skills' }
            ]
          }
        ],
        social: [
          { name: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/username' },
          { name: 'LinkedIn', icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/username' },
          { name: 'Twitter', icon: 'fab fa-twitter', href: 'https://twitter.com/username' },
          { name: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com/username' }
        ]
      };
    } catch (error) {
      console.error('Error getting footer links from translations:', error);
      return { sections: [], social: [] };
    }
  };

  const footerLinks = getFooterLinksFromTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Escutar mudanças de tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system';
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
    
    const handleThemeChange = (event: CustomEvent) => {
      setCurrentTheme(event.detail.theme);
      console.log('FooterComponent: Tema mudou para', event.detail.theme);
    };
    
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  return (
    <>
      <footer className="bg-gray-900 dark:bg-black text-white md:text-left text-center">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {t('header.logo')}
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {footerLinks.sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                {t('footer.newsletter.title')}
              </h4>
              <p className="text-gray-400 mb-6">
                {t('footer.newsletter.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  {t('footer.newsletter.button')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                {t('footer.legal.copyright', { year: currentYear })}
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button
                  onClick={() => scrollToSection('#privacy')}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {t('footer.legal.privacy')}
                </button>
                <button
                  onClick={() => scrollToSection('#terms')}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {t('footer.legal.terms')}
                </button>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">{t('footer.legal.developedWith')}</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
          aria-label={t('footer.backToTop')}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </footer>
    </>
  );
};

export default FooterComponent;
