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
      "no-empty": "off",                     // Turn off the 'no-empty' rule
    "no-useless-escape": "off",            // Turn off the 'no-useless-escape' rule
    "no-constant-binary-expression": "off", // Turn off the 'no-constant-binary-expression' rule
    "no-prototype-builtins": "off",  
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-cond-assign": "off"
    }
  },
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { globals: globals.browser } 
  },
  pluginReact.configs.flat.recommended,
]);
