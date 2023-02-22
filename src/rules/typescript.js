/** @type {import('eslint-define-config').Rules} */
exports.typescriptRules = {
  '@typescript-eslint/adjacent-overload-signatures': ['warn'],
  '@typescript-eslint/array-type': ['warn', { default: 'array' }],
  '@typescript-eslint/await-thenable': ['warn'],
  '@typescript-eslint/ban-ts-comment': ['error'],
  '@typescript-eslint/ban-tslint-comment': ['error'],
  '@typescript-eslint/ban-types': ['error'],
  '@typescript-eslint/block-spacing': ['off'], // Prettier
  '@typescript-eslint/brace-style': ['off'], // Prettier
  '@typescript-eslint/class-literal-property-style': ['off'], // No preference
  '@typescript-eslint/comma-dangle': ['off'], // Prettier
  '@typescript-eslint/comma-spacing': ['off'], // Prettier
  '@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],
  '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
  '@typescript-eslint/consistent-type-assertions': ['off'], // No preference
  '@typescript-eslint/consistent-type-definitions': ['off'], // No preference
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    { fixMixedExportsWithInlineTypeSpecifier: true }
  ],
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
  ],
  '@typescript-eslint/default-param-last': ['warn'],
  '@typescript-eslint/dot-notation': ['warn'],
  '@typescript-eslint/explicit-function-return-type': ['off'],
  '@typescript-eslint/explicit-member-accessibility': ['off'],
  '@typescript-eslint/explicit-module-boundary-types': ['off'],
  '@typescript-eslint/func-call-spacing': ['off'], // Prettier
  '@typescript-eslint/indent': ['off'], // Prettier
  '@typescript-eslint/init-declarations': ['off'],
  '@typescript-eslint/key-spacing': ['off'], // Prettier
  '@typescript-eslint/keyword-spacing': ['off'], // Prettier
  '@typescript-eslint/lines-between-class-members': ['off'],
  '@typescript-eslint/member-delimiter-style': [
    'warn',
    {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false },
      multilineDetection: 'brackets'
    }
  ], // Prettier
  '@typescript-eslint/member-ordering': ['off'],
  '@typescript-eslint/method-signature-style': ['warn', 'property'],
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
  '@typescript-eslint/no-array-constructor': ['error'],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-non-null-assertion': ['off'], // Prettier conflict removes parenthesis
  '@typescript-eslint/no-confusing-void-expression': [
    'warn',
    { ignoreArrowShorthand: true, ignoreVoidOperator: true }
  ],
  '@typescript-eslint/no-dupe-class-members': ['error'],
  '@typescript-eslint/no-duplicate-enum-values': ['warn'],
  '@typescript-eslint/no-dynamic-delete': ['warn'],
  '@typescript-eslint/no-empty-function': ['off'], // Annoying wavy underline inside curly brackets
  '@typescript-eslint/no-empty-interface': ['warn'],
  '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: true }],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  '@typescript-eslint/no-extra-parens': ['off'], // Prettier
  '@typescript-eslint/no-extra-semi': ['off'], // Prettier
  '@typescript-eslint/no-extraneous-class': ['warn'],
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: true,
      ignoreIIFE: true
    }
  ],
  '@typescript-eslint/no-for-in-array': ['warn'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-import-type-side-effects': ['warn'],
  '@typescript-eslint/no-inferrable-types': ['warn'],
  '@typescript-eslint/no-invalid-this': ['error'],
  '@typescript-eslint/no-invalid-void-type': ['error'],
  '@typescript-eslint/no-loop-func': ['error'],
  '@typescript-eslint/no-loss-of-precision': ['error'],
  '@typescript-eslint/no-magic-numbers': ['off'],
  '@typescript-eslint/no-meaningless-void-operator': ['warn'],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-misused-promises': ['error'],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['warn'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['off'],
  '@typescript-eslint/no-redeclare': [
    'error',
    { ignoreDeclarationMerge: true }
  ],
  '@typescript-eslint/no-redundant-type-constituents': ['warn'],
  '@typescript-eslint/no-require-imports': ['warn'],
  '@typescript-eslint/no-restricted-imports': ['off'],
  '@typescript-eslint/no-shadow': ['off'],
  '@typescript-eslint/no-this-alias': ['error'],
  '@typescript-eslint/no-throw-literal': ['error'],
  '@typescript-eslint/no-type-alias': ['off'],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn'],
  '@typescript-eslint/no-unnecessary-condition': [
    'warn',
    { allowConstantLoopConditions: true }
  ],
  '@typescript-eslint/no-unnecessary-qualifier': ['warn'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
  '@typescript-eslint/no-unnecessary-type-constraint': ['warn'],
  '@typescript-eslint/no-unsafe-argument': ['error'],
  '@typescript-eslint/no-unsafe-assignment': ['error'],
  '@typescript-eslint/no-unsafe-call': ['error'],
  '@typescript-eslint/no-unsafe-declaration-merging': ['warn'],
  '@typescript-eslint/no-unsafe-member-access': ['error'],
  '@typescript-eslint/no-unsafe-return': ['error'],
  '@typescript-eslint/no-unused-expressions': [
    'warn',
    { allowShortCircuit: true, allowTernary: true }
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      variables: true,
      functions: false,
      classes: true,
      allowNamedExports: false
    }
  ],
  '@typescript-eslint/no-useless-constructor': ['warn'],
  '@typescript-eslint/no-useless-empty-export': ['warn'],
  '@typescript-eslint/no-var-requires': ['error'],
  '@typescript-eslint/non-nullable-type-assertion-style': ['warn'],
  '@typescript-eslint/object-curly-spacing': ['off'], // Prettier
  '@typescript-eslint/padding-line-between-statements': ['off'], // Prettier
  '@typescript-eslint/parameter-properties': ['off'],
  '@typescript-eslint/prefer-as-const': ['error'],
  '@typescript-eslint/prefer-enum-initializers': ['off'],
  '@typescript-eslint/prefer-for-of': ['warn'],
  '@typescript-eslint/prefer-function-type': ['warn'],
  '@typescript-eslint/prefer-includes': ['warn'],
  '@typescript-eslint/prefer-literal-enum-member': ['warn'],
  '@typescript-eslint/prefer-namespace-keyword': ['error'],
  '@typescript-eslint/prefer-nullish-coalescing': ['warn'], // This rule will not work as expected if strictNullChecks is not enabled.
  '@typescript-eslint/prefer-optional-chain': ['warn'],
  '@typescript-eslint/prefer-readonly': ['off'],
  '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
  '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],
  '@typescript-eslint/prefer-regexp-exec': ['warn'],
  '@typescript-eslint/prefer-return-this-type': ['warn'],
  '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],
  '@typescript-eslint/prefer-ts-expect-error': ['error'], // Redundant with @typescript-eslint/ban-ts-comment
  '@typescript-eslint/promise-function-async': ['warn'],
  '@typescript-eslint/quotes': ['off'], // Prettier
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
  '@typescript-eslint/semi': ['off'], // Prettier
  '@typescript-eslint/sort-type-constituents': ['off'], // Turn `string | string[]` to `string[] | string` https://github.com/typescript-eslint/typescript-eslint/issues/2937
  '@typescript-eslint/space-before-blocks': ['off'], // Prettier
  '@typescript-eslint/space-before-function-paren': ['off'], // Prettier
  '@typescript-eslint/space-infix-ops': ['off'], // Prettier
  '@typescript-eslint/strict-boolean-expressions': ['off'], // strict-boolean-expressions - a more opinionated version of no-unnecessary-condition. strict-boolean-expressions enforces a specific code style, while no-unnecessary-condition is about correctness.
  '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
  '@typescript-eslint/triple-slash-reference': ['error'],
  '@typescript-eslint/type-annotation-spacing': [
    'warn',
    { before: false, after: true }
  ], // Prettier
  '@typescript-eslint/typedef': ['off'],
  '@typescript-eslint/unbound-method': ['error'],
  '@typescript-eslint/unified-signatures': ['warn']
};
