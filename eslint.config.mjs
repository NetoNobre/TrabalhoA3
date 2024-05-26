import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import nextConfig from 'eslint-config-next';

export default [
  pluginJs.configs.recommended,
  pluginReactConfig,
  nextConfig,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      'react/no-unescaped-entities': 'off',  // Desativa a regra 'react/no-unescaped-entities'
    },
  },
];
