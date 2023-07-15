const { defineConfig } = require('eslint-define-config');

const { javascriptRules } = require('./rules/javascript');
const { prettierConflictRules } = require('./rules/conflicts/prettier');
const { importRules } = require('./rules/import');

module.exports = defineConfig({
  env: { es2022: true, node: true },
  overrides: [
    {
      files: ['**/*.{js,jsx,cjs,mjs}'],
      plugins: ['import'],
      rules: { ...javascriptRules, ...prettierConflictRules, ...importRules }
    }
  ]
});
