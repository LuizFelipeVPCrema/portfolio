import React from 'react';
import { I18nProvider } from '../i18n/I18nContext';
import Header from './Header';
import HeroComponent from './HeroComponent';
import AboutSection from './AboutSection';
import SkillsComponent from './SkillsComponent';
import ProjectsSection from './ProjectsSection';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';

const AppWrapper: React.FC = () => {
  return (
    <I18nProvider>
      <Header />
      <HeroComponent />
      <AboutSection />
      <SkillsComponent />
      <ProjectsSection />
      <ContactComponent />
      <FooterComponent />
    </I18nProvider>
  );
};

export default AppWrapper;
