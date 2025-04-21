import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    rules: {
      'no-unused-vars': 'off',  // Disable unused variables check
      'no-require-imports': 'off',  // Disable require imports check
      'no-undef': 'off',  // Disable undefined variable check
    }
  },
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { globals: globals.browser } 
  },
  pluginReact.configs.flat.recommended,
]);
