const { defineConfig } = require('eslint-define-config');

process.env['ESLINT_TSCONFIG'] = 'tsconfig.json';

/** @type {import('eslint').Linter.Config} */
module.exports = defineConfig({ extends: ['./typescript'], root: true });
