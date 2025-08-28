import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations, type Locale } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  tRaw: (key: string) => any;
  availableLocales: Locale[];
}

// Contexto
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Hook personalizado
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Função para obter valor aninhado do objeto
const getNestedValue = (obj: any, path: string): any => {
  const result = path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
  return result;
};

// Função para substituir parâmetros na string
const replaceParams = (text: string, params?: Record<string, string | number>): string => {
  if (!params) return text;
  
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key]?.toString() || match;
  });
};

// Função para traduzir
const translate = (translations: any, key: string, params?: Record<string, string | number>): string => {
  const value = getNestedValue(translations, key);
  
  if (value === undefined) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  if (typeof value === 'string') {
    return replaceParams(value, params);
  }
  
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  
  return JSON.stringify(value);
};

// Provider
interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('pt-BR');

  const availableLocales: Locale[] = ['pt-BR', 'en-US', 'es-ES'];

  // Função para mudar locale
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Disparar evento para notificar outros componentes
    const localeEvent = new CustomEvent('localeChanged', {
      detail: { locale: newLocale }
    });
    window.dispatchEvent(localeEvent);
  };

  // Função de tradução
  const t = (key: string, params?: Record<string, string | number>): string => {
    return translate(translations[locale], key, params);
  };

  // Função para obter valor bruto (sem stringify)
  const tRaw = (key: string): any => {
    return getNestedValue(translations[locale], key);
  };

  // Carregar locale salvo no localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && availableLocales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      // Detectar idioma do navegador
      const browserLocale = navigator.language as Locale;
      if (availableLocales.includes(browserLocale)) {
        setLocaleState(browserLocale);
      }
    }
  }, []);

  const value: I18nContextType = {
    locale,
    setLocale,
    t,
    tRaw,
    availableLocales
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
