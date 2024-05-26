import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'react/no-unescaped-entities': 'off',  // Desativa a regra 'react/no-unescaped-entities'
    },
  },
];
