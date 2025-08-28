import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { renderGradientTitle } from '../utils/titleUtils';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const AboutSection: React.FC = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education'>('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Desenvolvedor Full-Stack Senior",
      company: "TechCorp",
      period: "2022 - Presente",
      description: "Liderando o desenvolvimento de aplicações web modernas utilizando React, Angular e Node.js. Implementando arquiteturas escaláveis e boas práticas de desenvolvimento.",
      technologies: ["React", "Angular", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Desenvolvedor Frontend",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Desenvolvimento de interfaces responsivas e interativas, otimização de performance e implementação de design systems.",
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Jest"]
    },
    {
      id: 3,
      title: "Desenvolvedor Júnior",
      company: "StartupXYZ",
      period: "2018 - 2020",
      description: "Primeira experiência profissional desenvolvendo aplicações web e aprendendo as melhores práticas do mercado.",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"]
    }
  ];

  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal",
      period: "2014 - 2018",
      description: "Formação sólida em fundamentos da computação, algoritmos e estruturas de dados."
    },
    {
      degree: "Especialização em Desenvolvimento Web",
      institution: "Instituto de Tecnologia",
      period: "2019 - 2020",
      description: "Foco em tecnologias modernas de desenvolvimento web e frameworks."
    }
  ];

  const tabs = [
    { id: 'about', label: t('about.tabs.about') },
    { id: 'experience', label: t('about.tabs.experience') },
    { id: 'education', label: t('about.tabs.education') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {renderGradientTitle(t('about.title') === 'Sobre' ? 'Sobre Mim' : t('about.title') === 'About' ? 'About Me' : 'Sobre Mí')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 gap-6 lg:w-1/2 w-full mx-auto text-justify">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('about.content.about.subtitle')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about.content.about.description')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about.content.about.description2')}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {t('about.content.about.stats.projects.number')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t('about.content.about.stats.projects.label')}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {t('about.content.about.stats.experience.number')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t('about.content.about.stats.experience.label')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${'lg:ml-0'}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
