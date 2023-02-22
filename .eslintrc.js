const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['./typescript'],
  root: true,
  parserOptions: { tsconfigRootDir: __dirname, project: './tsconfig.json' }
});
