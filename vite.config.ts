import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import PxToRem from './px-to-rem';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true, }),
    Unocss(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts', // 自动生成声明文件，自动引入相关插件
      imports: ['vue', 'pinia'],  // 自动引入的内容
      dirs: ['src/composables'], // 自动导入composables目录的全部模块
    }),
    Components({
      dirs: ['src/components'], // 自动导入components目录下的组件，相关页面直接调用加载
      dts: './src/types/components.d.ts', // 自动生成类型声明文件，自动引入相关插件
      resolvers: [AntDesignVueResolver({ resolveIcons: true })],
    }),
    PxToRem(),  //px转rem
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

