import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';
import deDE from './locales/de-DE.json';

export const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES,
  'de-DE': deDE
};

export type Locale = keyof typeof translations;
