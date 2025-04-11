# Configuração para GitHub Pages - Sollos Franchising

Este arquivo contém as modificações necessárias para o arquivo next.config.ts para hospedar o site no GitHub Pages.

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

Substitua o conteúdo do arquivo next.config.ts original por este código para preparar o site para hospedagem no GitHub Pages.
