import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { renderGradientTitle } from '../utils/titleUtils';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

const SkillsComponent: React.FC = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system');
  const skillsRef = useRef<HTMLDivElement>(null);



  // Função para obter skills das traduções
  const getSkillsFromTranslations = (): Skill[] => {
    const allSkills: Skill[] = [];
    
    try {
      // Frontend skills
      const frontendSkills = JSON.parse(t('skills.skillsList.frontend')) as any[];
      frontendSkills.forEach(skill => {
        allSkills.push({
          ...skill,
          category: 'frontend'
        });
      });
      
      // Backend skills
      const backendSkills = JSON.parse(t('skills.skillsList.backend')) as any[];
      backendSkills.forEach(skill => {
        allSkills.push({
          ...skill,
          category: 'backend'
        });
      });
      
      // Tools skills
      const toolsSkills = JSON.parse(t('skills.skillsList.tools')) as any[];
      toolsSkills.forEach(skill => {
        allSkills.push({
          ...skill,
          category: 'tools'
        });
      });
    } catch (error) {
      console.warn('Erro ao carregar skills das traduções:', error);
    }
    
    return allSkills;
  };

  const skills = getSkillsFromTranslations();

  const categories = [
    { id: 'all', name: t('skills.categories.all'), count: skills.length },
    { id: 'frontend', name: t('skills.categories.frontend'), count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: t('skills.categories.backend'), count: skills.filter(s => s.category === 'backend').length },
    { id: 'tools', name: t('skills.categories.tools'), count: skills.filter(s => s.category === 'tools').length }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skills;
    }
    return skills.filter(skill => skill.category === activeCategory);
  };

  useEffect(() => {
    // Animar skills quando a categoria mudar
    if (skillsRef.current) {
      const skillCards = skillsRef.current.querySelectorAll('.skill-card');
      skillCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.remove('opacity-0');
          card.classList.add('animate-fade-in-up');
        }, index * 50);
      });
    }
  }, [activeCategory]);

  // Animar skills na primeira renderização
  useEffect(() => {
    const timer = setTimeout(() => {
      if (skillsRef.current) {
        const skillCards = skillsRef.current.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.remove('opacity-0');
            card.classList.add('animate-fade-in-up');
          }, index * 50);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Escutar mudanças de tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system';
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
    
    const handleThemeChange = (event: CustomEvent) => {
      setCurrentTheme(event.detail.theme);
      console.log('SkillsComponent: Tema mudou para', event.detail.theme);
    };
    
    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  const getCategoryButtonClass = (categoryId: string) => {
    const baseClass = "px-4 py-2 rounded-lg font-medium transition-all duration-300";
    return activeCategory === categoryId
      ? `${baseClass} bg-purple-600 text-white shadow-lg`
      : `${baseClass} bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700`;
  };

  return (
    <>
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
                     <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
               {renderGradientTitle(t('skills.title'))}
             </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={getCategoryButtonClass(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${skill.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-code text-green-600 dark:text-green-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('skills.infoCards.cleanCode.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('skills.infoCards.cleanCode.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('skills.infoCards.responsive.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('skills.infoCards.responsive.description')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t('skills.infoCards.performance.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('skills.infoCards.performance.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsComponent;
