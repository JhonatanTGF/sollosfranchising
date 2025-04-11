# Modificações no package.json para GitHub Pages

Este arquivo contém as modificações necessárias para o arquivo package.json para hospedar o site no GitHub Pages.

```json
{
  "name": "sollos_site_nextjs",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://seu-usuario-github.github.io/sollos-franchising",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export -o out",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  },
  // resto do arquivo permanece igual
}
```

Adicione as linhas `homepage`, `export`, `predeploy` e `deploy` ao seu arquivo package.json para preparar o site para hospedagem no GitHub Pages.
