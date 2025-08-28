import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';

export const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES
};

export type Locale = keyof typeof translations;
