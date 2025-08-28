# Bootstrap Icons - Guia de Uso

## Instalação
O Bootstrap Icons já está instalado no projeto via npm e configurado localmente. Os arquivos foram copiados para a pasta `public` para melhor performance.

### Configuração Atual
- ✅ Bootstrap Icons instalado via npm
- ✅ CSS importado no `src/styles/global.css`
- ✅ Fontes copiadas para `public/fonts/`
- ✅ CSS copiado para `public/bootstrap-icons.css`
- ❌ Não depende de CDN externo

## Como usar

### 1. Sintaxe Básica
```html
<i class="bi bi-nome-do-icone"></i>
```

### 2. Exemplos de Ícones Comuns

#### Ícones de Navegação
```html
<i class="bi bi-house"></i>          <!-- Casa -->
<i class="bi bi-person"></i>         <!-- Pessoa -->
<i class="bi bi-gear"></i>           <!-- Configurações -->
<i class="bi bi-search"></i>         <!-- Busca -->
<i class="bi bi-menu"></i>           <!-- Menu hambúrguer -->
```

#### Ícones de Ação
```html
<i class="bi bi-plus"></i>           <!-- Adicionar -->
<i class="bi bi-trash"></i>          <!-- Lixeira -->
<i class="bi bi-pencil"></i>         <!-- Editar -->
<i class="bi bi-heart"></i>          <!-- Coração -->
<i class="bi bi-star"></i>           <!-- Estrela -->
```

#### Ícones de Comunicação
```html
<i class="bi bi-envelope"></i>       <!-- Email -->
<i class="bi bi-telephone"></i>      <!-- Telefone -->
<i class="bi bi-chat"></i>           <!-- Chat -->
<i class="bi bi-share"></i>          <!-- Compartilhar -->
```

#### Ícones de Tecnologia
```html
<i class="bi bi-code-slash"></i>     <!-- Código -->
<i class="bi bi-braces"></i>         <!-- Chaves -->
<i class="bi bi-rocket"></i>         <!-- Foguete -->
<i class="bi bi-cpu"></i>            <!-- CPU -->
<i class="bi bi-laptop"></i>         <!-- Laptop -->
```

### 3. Tamanhos
```html
<i class="bi bi-star fs-1"></i>      <!-- Extra grande -->
<i class="bi bi-star fs-2"></i>      <!-- Muito grande -->
<i class="bi bi-star fs-3"></i>      <!-- Grande -->
<i class="bi bi-star fs-4"></i>      <!-- Médio -->
<i class="bi bi-star fs-5"></i>      <!-- Pequeno -->
<i class="bi bi-star fs-6"></i>      <!-- Muito pequeno -->
```

### 4. Cores com Tailwind CSS
```html
<i class="bi bi-heart text-red-500"></i>           <!-- Vermelho -->
<i class="bi bi-star text-yellow-500"></i>         <!-- Amarelo -->
<i class="bi bi-check text-green-500"></i>         <!-- Verde -->
<i class="bi bi-info text-blue-500"></i>           <!-- Azul -->
<i class="bi bi-exclamation text-orange-500"></i>  <!-- Laranja -->
```

### 5. Animações
```html
<!-- Ícone com hover -->
<i class="bi bi-heart hover:text-red-500 transition-colors"></i>

<!-- Ícone com rotação -->
<i class="bi bi-arrow-clockwise animate-spin"></i>

<!-- Ícone com bounce -->
<i class="bi bi-arrow-up animate-bounce"></i>
```

### 6. Exemplos no Projeto

#### Botões com Ícones
```jsx
<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
  <i className="bi bi-download"></i>
  Download
</button>
```

#### Cards com Ícones
```jsx
<div className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow">
  <i className="bi bi-check-circle text-green-500 text-xl"></i>
  <span>Item concluído</span>
</div>
```

#### Navegação com Ícones
```jsx
<nav className="flex space-x-4">
  <a href="#" className="flex items-center gap-2">
    <i className="bi bi-house"></i>
    Home
  </a>
  <a href="#" className="flex items-center gap-2">
    <i className="bi bi-person"></i>
    Perfil
  </a>
</nav>
```

## Referência Completa
Para ver todos os ícones disponíveis, visite: https://icons.getbootstrap.com/

## Dicas
1. Sempre use a classe `bi` como base
2. Combine com classes do Tailwind CSS para estilização
3. Use `flex items-center gap-2` para alinhar ícones com texto
4. Para ícones grandes, use `text-lg`, `text-xl`, `text-2xl`, etc.
5. Para ícones coloridos, use as classes de cor do Tailwind
