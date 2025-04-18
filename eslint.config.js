import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/essential'],

  {
    rules: {
      'vue/multi-word-component-names': 'off', // 禁用多单词组件名称规则
      'vue/component-name-in-template-casing': 'off', // 禁用组件名称大小写一致规则
      // 其他规则配置
    },
  },
]);
