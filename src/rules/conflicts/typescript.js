/** @type {import('eslint-define-config').Rules} */
exports.typescriptConflictRules = {
  'block-spacing': 'off',
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'constructor-super': 'off', // ts(2335) & ts(2377)
  'default-param-last': 'off',
  'dot-notation': 'off',
  'func-call-spacing': 'off',
  'getter-return': 'off', // ts(2378)
  indent: 'off',
  'init-declarations': 'off',
  'key-spacing': 'off',
  'keyword-spacing': 'off',
  'lines-between-class-members': 'off',
  'no-array-constructor': 'off',
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-empty-function': 'off',
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-func-assign': 'off', // ts(2539)
  'no-implied-eval': 'off',
  'no-import-assign': 'off', // ts(2539) & ts(2540)
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-new-symbol': 'off', // ts(7009)
  'no-obj-calls': 'off', // ts(2349)
  'no-redeclare': 'off', // ts(2451)
  'no-restricted-imports': 'off',
  'no-return-await': 'off',
  'no-setter-return': 'off', // ts(2408)
  'no-shadow': 'off',
  'no-this-before-super': 'off', // ts(2376)
  'no-throw-literal': 'off',
  'no-undef': 'off', // ts(2304)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off', // ts(6133)
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'object-curly-spacing': 'off',
  'padding-line-between-statements': 'off',
  quotes: 'off',
  'require-await': 'off',
  semi: 'off',
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-infix-ops': 'off',
  'valid-typeof': 'off' // ts(2367)
};
