# Instruções para Hospedagem no GitHub Pages - Sollos Franchising

Este documento contém instruções detalhadas para hospedar o site da Sollos Franchising no GitHub Pages.

## Pré-requisitos

- Uma conta no GitHub
- Git instalado em seu computador
- Node.js e npm instalados em seu computador

## Passos para Hospedagem

### 1. Criar um Repositório no GitHub

1. Acesse [GitHub](https://github.com/) e faça login em sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Nomeie o repositório como `sollos-franchising` (ou outro nome de sua preferência)
4. Deixe o repositório como público
5. Clique em "Create repository"

### 2. Configurar o Projeto para GitHub Pages

1. Descompacte este arquivo ZIP em uma pasta em seu computador
2. Abra o arquivo `package.json` e adicione as seguintes linhas:

```json
"homepage": "https://seu-usuario-github.github.io/sollos-franchising",
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out",
  "export": "next build && next export -o out"
}
```

3. Abra o arquivo `next.config.ts` e modifique-o para:

```typescript
import { withConfig } from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/sollos-franchising' : '',
  images: {
    unoptimized: true,
  },
};

export default withConfig(nextConfig);
```

### 3. Instalar Dependências e Preparar para Implantação

1. Abra um terminal na pasta do projeto
2. Execute os seguintes comandos:

```bash
npm install
npm install --save-dev gh-pages
```

### 4. Inicializar o Repositório Git e Fazer o Primeiro Commit

```bash
git init
git add .
git commit -m "Primeiro commit - Site Sollos Franchising"
git branch -M main
git remote add origin https://github.com/seu-usuario-github/sollos-franchising.git
git push -u origin main
```

### 5. Construir e Implantar o Site

```bash
npm run export
npm run deploy
```

### 6. Configurar GitHub Pages no Repositório

1. Acesse seu repositório no GitHub
2. Vá para "Settings" > "Pages"
3. Em "Source", selecione "gh-pages" como branch e "/ (root)" como pasta
4. Clique em "Save"

Após alguns minutos, seu site estará disponível em:
`https://seu-usuario-github.github.io/sollos-franchising`

## Estrutura do Projeto

- `src/app/`: Contém as páginas do site
- `src/components/`: Componentes reutilizáveis
- `public/`: Arquivos estáticos (imagens, fontes, etc.)

## Personalização

Para personalizar o site:

- Edite os arquivos em `src/app/` para modificar o conteúdo das páginas
- Edite os arquivos em `src/components/` para modificar os componentes
- Adicione suas próprias imagens na pasta `public/`

## Suporte

Se encontrar algum problema durante a implantação, consulte a documentação oficial:

- [GitHub Pages](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
