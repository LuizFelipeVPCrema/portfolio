import React from 'react';

// Utilitário para gerenciar títulos com gradiente de forma escalável
export interface TitleParts {
  first: string;
  second: string;
}

// Padrões conhecidos para diferentes idiomas
const TITLE_PATTERNS: Record<string, TitleParts> = {
  // Português
  'Minhas Habilidades': { first: 'Minhas ', second: 'Habilidades' },
  'Sobre Mim': { first: 'Sobre ', second: 'Mim' },
  'Vamos Conversar': { first: 'Vamos ', second: 'Conversar' },
  
  // Inglês
  'My Skills': { first: 'My ', second: 'Skills' },
  'About Me': { first: 'About ', second: 'Me' },
  "Let's Talk": { first: "Let's ", second: 'Talk' },
  
  // Espanhol
  'Mis Habilidades': { first: 'Mis ', second: 'Habilidades' },
  'Sobre Mí': { first: 'Sobre ', second: 'Mí' },
  'Vamos a Conversar': { first: 'Vamos a ', second: 'Conversar' },
  
  // Alemão (exemplo de como adicionar novos idiomas)
  'Meine Fähigkeiten': { first: 'Meine ', second: 'Fähigkeiten' },
  'Über Mich': { first: 'Über ', second: 'Mich' },
  
  // Francês (exemplo de como adicionar novos idiomas)
  'Mes Compétences': { first: 'Mes ', second: 'Compétences' },
  'À Propos de Moi': { first: 'À Propos de ', second: 'Moi' },
  
  // Italiano (exemplo de como adicionar novos idiomas)
  'Le Mie Competenze': { first: 'Le Mie ', second: 'Competenze' },
  'Su di Me': { first: 'Su di ', second: 'Me' }
};

/**
 * Extrai as partes de um título para aplicar gradiente na segunda parte
 * @param title - O título completo
 * @returns Objeto com as partes first e second
 */
export const getTitleParts = (title: string): TitleParts => {
  // Se encontrou um padrão conhecido, retorna as partes
  if (TITLE_PATTERNS[title]) {
    return TITLE_PATTERNS[title];
  }

  // Fallback: divide o título em duas partes (primeira palavra + resto)
  const words = title.split(' ');
  if (words.length >= 2) {
    return {
      first: words[0] + ' ',
      second: words.slice(1).join(' ')
    };
  }

  // Se só tem uma palavra, retorna ela como segunda parte
  return {
    first: '',
    second: title
  };
};

/**
 * Renderiza um título com gradiente na segunda parte
 * @param title - O título completo
 * @param gradientClasses - Classes CSS para o gradiente (opcional)
 * @returns JSX element com o título formatado
 */
export const renderGradientTitle = (
  title: string, 
  gradientClasses: string = "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
): React.ReactNode => {
  const titleParts = getTitleParts(title);
  
  return (
    <>
      {titleParts.first}
      <span className={gradientClasses}>
        {titleParts.second}
      </span>
    </>
  );
};

/**
 * Adiciona um novo padrão de título para um idioma específico
 * @param title - O título completo
 * @param parts - As partes do título
 */
export const addTitlePattern = (title: string, parts: TitleParts) => {
  TITLE_PATTERNS[title] = parts;
};
