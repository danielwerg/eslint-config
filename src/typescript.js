const { defineConfig } = require('eslint-define-config');

const fs = require('node:fs');
const { join } = require('node:path');

const { javascriptRules } = require('./rules/javascript');
const { typescriptConflictRules } = require('./rules/conflicts/typescript');
const { typescriptRules } = require('./rules/typescript');
const { typescriptTypedRules } = require('./rules/typescriptTyped');
const { prettierConflictRules } = require('./rules/conflicts/prettier');
const { importRules } = require('./rules/import');

const tsconfigRootDir = process.cwd();
const tsconfigFilePath =
  process.env['ESLINT_TSCONFIG'] ?? './tsconfig.eslint.json';

const doTyped = fs.existsSync(join(tsconfigRootDir, tsconfigFilePath));

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
        ...(doTyped ? typescriptTypedRules : {}),
        ...prettierConflictRules,
        ...importRules
      }
    }
  ]
});
