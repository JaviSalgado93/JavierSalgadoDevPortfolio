import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://javisalgado93.github.io',
  base: '/JavierSalgadoDevPortfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});
