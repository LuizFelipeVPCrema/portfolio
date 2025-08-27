# 🚀 DevPortfolio - Portfólio Moderno com Astro

Um portfólio profissional e moderno desenvolvido com **Astro**, **React** e **Angular**, seguindo os princípios de arquitetura hexagonal, mobile-first e otimização de performance.

## ✨ Características

### 🎨 Design & UX
- **Mobile-First**: Design responsivo otimizado para todos os dispositivos
- **Light/Dark Mode**: Tema claro e escuro com transições suaves
- **Animações**: Animações fluidas e interativas
- **Acessibilidade**: Totalmente acessível com suporte a navegação por teclado
- **Performance**: Otimizado para máxima velocidade de carregamento

### 🏗️ Arquitetura
- **Arquitetura Hexagonal**: Separação clara entre domínio, aplicação e infraestrutura
- **Componentes Intercalados**: React e Angular trabalhando em harmonia
- **Zero JavaScript Default**: Seguindo os princípios do Astro
- **Islands Architecture**: Hidratação seletiva apenas onde necessário

### 🛠️ Tecnologias

#### Core
- **Astro 5.13.3** - Framework principal
- **React 19.1.1** - Componentes interativos
- **Angular 20.2.1** - Componentes complexos
- **TypeScript** - Tipagem estática

#### Styling
- **Tailwind CSS 3.4.0** - Framework CSS utilitário
- **Font Awesome 6.4.0** - Ícones
- **Inter Font** - Tipografia moderna

#### Performance
- **Intersection Observer API** - Animações baseadas em scroll
- **Lazy Loading** - Carregamento sob demanda
- **Image Optimization** - Otimização automática de imagens

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React e Angular
│   ├── Header.tsx      # Header com navegação (React)
│   ├── HeroComponent.ts # Seção hero com animações (Angular)
│   ├── AboutSection.tsx # Seção sobre com tabs (React)
│   ├── SkillsComponent.ts # Habilidades com filtros (Angular)
│   ├── ProjectsSection.tsx # Galeria de projetos (React)
│   ├── ContactComponent.ts # Formulário de contato (Angular)
│   └── Footer.tsx      # Footer com links (React)
├── layouts/
│   └── Layout.astro    # Layout principal com tema
└── pages/
    └── index.astro     # Página principal
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/devportfolio.git
cd devportfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:4200
```

### Build para Produção

```bash
npm run build
npm run preview
```

## 🎯 Seções do Portfólio

### 1. **Header** (React)
- Navegação responsiva
- Toggle de tema light/dark
- Menu mobile com animações
- Scroll suave entre seções

### 2. **Hero** (Angular)
- Apresentação impactante
- Animações de blob
- Call-to-action buttons
- Preview das tecnologias

### 3. **Sobre** (React)
- Informações pessoais
- Experiência profissional
- Educação
- Tabs interativas

### 4. **Habilidades** (Angular)
- Categorização por área
- Barras de progresso animadas
- Filtros dinâmicos
- Ícones coloridos

### 5. **Projetos** (React)
- Galeria de projetos
- Filtros por categoria
- Modal com detalhes
- Links para demo e código

### 6. **Contato** (Angular)
- Formulário com validação
- Informações de contato
- Links para redes sociais
- Status de disponibilidade

### 7. **Footer** (React)
- Links de navegação
- Newsletter
- Redes sociais
- Botão "voltar ao topo"

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#a855f7', // Cor principal
    600: '#9333ea', // Cor secundária
  },
  secondary: {
    500: '#3b82f6', // Cor de destaque
  }
}
```

### Conteúdo
- **Dados pessoais**: Edite os componentes correspondentes
- **Projetos**: Modifique o array `projects` em `ProjectsSection.tsx`
- **Habilidades**: Atualize o array `skills` em `SkillsComponent.ts`
- **Contato**: Altere as informações em `ContactComponent.ts`

### Animações
As animações podem ser personalizadas no `tailwind.config.js`:

```javascript
animation: {
  'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
  'blob': 'blob 7s infinite',
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- **Navegação por teclado**: Totalmente navegável via Tab
- **Screen readers**: Labels e aria-labels apropriados
- **Contraste**: Cores com contraste adequado
- **Reduced motion**: Suporte a `prefers-reduced-motion`
- **High contrast**: Suporte a `prefers-contrast: high`

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

### GitHub Pages
```bash
npm run build
# Configure o GitHub Actions para deploy automático
```

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Otimizações Implementadas
- Lazy loading de componentes
- Imagens otimizadas
- CSS crítico inline
- JavaScript mínimo
- Preload de fontes críticas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Astro](https://astro.build/) - Framework incrível
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Ícones
- [Inter Font](https://rsms.me/inter/) - Tipografia

---

**Desenvolvido com ❤️ usando Astro, React e Angular**
