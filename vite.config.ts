import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import PxToRem from './px-to-rem.ts';

export default defineConfig({
  plugins: [vue({
    reactivityTransform: true,
  }),
  PxToRem(),
  Unocss(),
  AutoImport({
    dts: 'src/types/auto-imports.d.ts',
    imports: ['vue', 'pinia'],
    dirs: ['src/composables']
  }),
  Components({
    dirs: ['src/components'],
    dts: './src/types/components.d.ts',
  }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

