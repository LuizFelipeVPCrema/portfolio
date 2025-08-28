# Sistema de Internacionalização (i18n) Escalável

## Visão Geral

Este sistema de internacionalização foi projetado para ser altamente escalável e fácil de manter, permitindo adicionar novos idiomas sem modificar o código dos componentes.

## Estrutura do Sistema

### 1. Arquivos de Tradução
- `src/i18n/locales/pt-BR.json` - Português brasileiro
- `src/i18n/locales/en-US.json` - Inglês americano
- `src/i18n/locales/es-ES.json` - Espanhol
- `src/i18n/locales/de-DE.json` - Alemão (exemplo de novo idioma)

### 2. Utilitários
- `src/i18n/I18nContext.tsx` - Contexto React para gerenciar traduções
- `src/i18n/translations.ts` - Centralizador de importações
- `src/utils/titleUtils.ts` - Utilitário para títulos com gradiente

### 3. Componentes
- `src/components/LanguageSelector.tsx` - Seletor de idioma
- `src/components/AppWrapper.tsx` - Wrapper com provider

## Como Adicionar um Novo Idioma

### Passo 1: Criar o arquivo de tradução

Crie um novo arquivo JSON em `src/i18n/locales/` seguindo o padrão `{código-idioma}.json`:

```json
{
  "common": {
    "loading": "Carregando...",
    "error": "Erro"
  },
  "navigation": {
    "home": "Início",
    "about": "Sobre"
  },
  "skills": {
    "title": "Minhas Habilidades",
    "subtitle": "Tecnologias e ferramentas..."
  }
}
```

### Passo 2: Adicionar ao centralizador

Atualize `src/i18n/translations.ts`:

```typescript
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';
import frFR from './locales/fr-FR.json'; // Novo idioma

export const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES,
  'fr-FR': frFR // Novo idioma
};
```

### Passo 3: Adicionar ao seletor de idioma

Atualize `src/components/LanguageSelector.tsx`:

```typescript
const getLanguageName = (locale: string) => {
  const languageNames: Record<string, string> = {
    'pt-BR': 'Português',
    'en-US': 'English',
    'es-ES': 'Español',
    'fr-FR': 'Français' // Novo idioma
  };
  return languageNames[locale] || locale;
};

const getLanguageFlag = (locale: string) => {
  const flags: Record<string, string> = {
    'pt-BR': '🇧🇷',
    'en-US': '🇺🇸',
    'es-ES': '🇪🇸',
    'fr-FR': '🇫🇷' // Nova bandeira
  };
  return flags[locale] || '🌐';
};
```

### Passo 4: Adicionar padrões de título (opcional)

Se o novo idioma tiver títulos específicos, adicione ao `src/utils/titleUtils.ts`:

```typescript
const TITLE_PATTERNS: Record<string, TitleParts> = {
  // Idiomas existentes...
  'Mes Compétences': { first: 'Mes ', second: 'Compétences' },
  'À Propos de Moi': { first: 'À Propos de ', second: 'Moi' }
};
```

## Como Usar nos Componentes

### 1. Importar o hook

```typescript
import { useI18n } from '../i18n/I18nContext';

const MyComponent: React.FC = () => {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <p>{t('common.description')}</p>
    </div>
  );
};
```

### 2. Usar títulos com gradiente

```typescript
import { renderGradientTitle } from '../utils/titleUtils';

const MyComponent: React.FC = () => {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{renderGradientTitle(t('skills.title'))}</h1>
    </div>
  );
};
```

### 3. Usar dados estruturados

```typescript
const MyComponent: React.FC = () => {
  const { t } = useI18n();
  
  // Para arrays/objetos JSON
  const skills = JSON.parse(t('skills.skillsList.frontend'));
  
  return (
    <div>
      {skills.map((skill: any) => (
        <div key={skill.name}>{skill.name}</div>
      ))}
    </div>
  );
};
```

## Vantagens do Sistema Escalável

### 1. **Separação de Responsabilidades**
- Traduções ficam em arquivos JSON separados
- Lógica de renderização fica nos componentes
- Utilitários reutilizáveis

### 2. **Fácil Manutenção**
- Adicionar novo idioma não requer mudanças no código
- Padrões de título centralizados
- Estrutura consistente

### 3. **Performance**
- Importações estáticas
- Sem carregamento dinâmico
- Cache automático

### 4. **Type Safety**
- TypeScript para validação
- Interfaces bem definidas
- Autocomplete no IDE

### 5. **Flexibilidade**
- Suporte a HTML nos títulos (se necessário)
- Fallbacks automáticos
- Padrões customizáveis

## Padrões de Título Automáticos

O sistema `titleUtils.ts` funciona de forma inteligente:

1. **Padrões Conhecidos**: Se o título existe no dicionário, usa a divisão específica
2. **Fallback Inteligente**: Divide na primeira palavra automaticamente
3. **Títulos Únicos**: Se só tem uma palavra, aplica gradiente nela

### Exemplos:

```typescript
// Padrões conhecidos
"Minhas Habilidades" → "Minhas " + "Habilidades" (gradiente)
"My Skills" → "My " + "Skills" (gradiente)

// Fallback automático
"Portfolio" → "" + "Portfolio" (gradiente)
"About Me" → "About " + "Me" (gradiente)
```

## Boas Práticas

### 1. **Estrutura de Chaves**
```json
{
  "section": {
    "title": "Título da seção",
    "subtitle": "Subtítulo",
    "items": [
      "Item 1",
      "Item 2"
    ],
    "nested": {
      "key": "Valor"
    }
  }
}
```

### 2. **Nomenclatura**
- Use camelCase para chaves
- Seja descritivo
- Mantenha consistência

### 3. **Organização**
- Agrupe por seções lógicas
- Use chaves aninhadas para complexidade
- Mantenha estrutura similar entre idiomas

### 4. **Dados Dinâmicos**
```typescript
// Para dados que mudam frequentemente
const projects = JSON.parse(t('projects.list'));

// Para textos estáticos
const title = t('projects.title');
```

## Troubleshooting

### Problema: Título duplicado
**Solução**: Use `renderGradientTitle()` em vez de lógica manual

### Problema: Tradução não encontrada
**Solução**: Verifique se a chave existe em todos os arquivos de idioma

### Problema: Caracteres especiais
**Solução**: Use UTF-8 encoding nos arquivos JSON

### Problema: Performance
**Solução**: Evite `JSON.parse()` em loops, faça uma vez no início do componente

## Exemplo Completo

Veja o arquivo `de-DE.json` como exemplo de como adicionar um novo idioma completo seguindo todas as boas práticas.
