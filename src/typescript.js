const { defineConfig } = require('eslint-define-config');

const { javascriptRules } = require('./rules/javascript');
const { typescriptConflictRules } = require('./rules/conflicts/typescript');
const { typescriptRules } = require('./rules/typescript');
const { prettierConflictRules } = require('./rules/conflicts/prettier');
const { importRules } = require('./rules/import');

const tsconfigRootDir = process.cwd();
const tsconfigFilePath =
  process.env['ESLINT_TSCONFIG'] ?? './tsconfig.eslint.json';

module.exports = defineConfig({
  env: { es2022: true, node: true },
  overrides: [
    {
      files: ['**/*.{ts,tsx,cts,mts}'],
      parser: '@typescript-eslint/parser',
      parserOptions: { tsconfigRootDir, project: tsconfigFilePath },
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        ...javascriptRules,
        ...typescriptConflictRules,
        ...typescriptRules,
        ...prettierConflictRules,
        ...importRules
      }
    }
  ]
});
