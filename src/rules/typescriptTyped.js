/** @type {import('eslint-define-config').Rules} */
exports.typescriptTypedRules = {
  '@typescript-eslint/await-thenable': ['warn'],
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    { fixMixedExportsWithInlineTypeSpecifier: true }
  ],
  '@typescript-eslint/dot-notation': ['warn'],
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      selector: 'variableLike',
      format: ['camelCase'],
      leadingUnderscore: 'allow'
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow'
    },
    {
      selector: 'typeLike',
      format: ['PascalCase']
    }
  ],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-void-expression': [
    'warn',
    { ignoreArrowShorthand: true, ignoreVoidOperator: true }
  ],
  '@typescript-eslint/no-duplicate-type-constituents': ['warn'],

  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: true,
      ignoreIIFE: true
    }
  ],
  '@typescript-eslint/no-for-in-array': ['warn'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-meaningless-void-operator': ['warn'],
  '@typescript-eslint/no-misused-promises': ['error'],
  '@typescript-eslint/no-mixed-enums': ['warn'],
  '@typescript-eslint/no-redundant-type-constituents': ['warn'],
  '@typescript-eslint/no-throw-literal': ['error'],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn'],
  '@typescript-eslint/no-unnecessary-condition': [
    'warn',
    { allowConstantLoopConditions: true }
  ],
  '@typescript-eslint/no-unnecessary-qualifier': ['warn'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
  '@typescript-eslint/no-unsafe-argument': ['error'],
  '@typescript-eslint/no-unsafe-assignment': ['error'],
  '@typescript-eslint/no-unsafe-call': ['error'],
  '@typescript-eslint/no-unsafe-enum-comparison': ['error'],
  '@typescript-eslint/no-unsafe-member-access': ['error'],
  '@typescript-eslint/no-unsafe-return': ['error'],
  '@typescript-eslint/non-nullable-type-assertion-style': ['warn'],
  '@typescript-eslint/prefer-includes': ['warn'],
  '@typescript-eslint/prefer-nullish-coalescing': ['warn'], // This rule will not work as expected if strictNullChecks is not enabled.
  '@typescript-eslint/prefer-optional-chain': ['warn'],
  '@typescript-eslint/prefer-readonly': ['off'],
  '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
  '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],
  '@typescript-eslint/prefer-regexp-exec': ['warn'],
  '@typescript-eslint/prefer-return-this-type': ['warn'],
  '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],
  '@typescript-eslint/promise-function-async': ['warn'],
  '@typescript-eslint/require-array-sort-compare': [
    'warn',
    { ignoreStringArrays: true }
  ],
  '@typescript-eslint/require-await': ['error'],
  '@typescript-eslint/restrict-plus-operands': ['error'],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    { allowNumber: true }
  ],
  '@typescript-eslint/return-await': ['off'],
  '@typescript-eslint/strict-boolean-expressions': ['off'], // strict-boolean-expressions - a more opinionated version of no-unnecessary-condition. strict-boolean-expressions enforces a specific code style, while no-unnecessary-condition is about correctness.
  '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
  '@typescript-eslint/unbound-method': ['error']
};
