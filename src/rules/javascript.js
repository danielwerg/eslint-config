/** @type {import('eslint-define-config').Rules} */
exports.javascriptRules = {
  'accessor-pairs': ['warn'],
  'array-bracket-newline': ['off'], // Prettier
  'array-bracket-spacing': ['warn', 'never'], // Prettier
  'array-callback-return': ['error', { allowImplicit: true }],
  'array-element-newline': ['off'], // Prettier
  'arrow-body-style': ['warn', 'as-needed'],
  'arrow-parens': ['warn', 'as-needed'], // Prettier
  'arrow-spacing': ['warn', { before: true, after: true }], // Prettier
  'block-scoped-var': ['error'],
  'block-spacing': ['warn', 'always'], // Prettier
  'brace-style': ['warn', '1tbs', { allowSingleLine: true }], // Prettier
  camelcase: ['off'], // @typescript-eslint/naming-convention
  'capitalized-comments': ['off'],
  'class-methods-use-this': ['off'],
  'comma-dangle': ['warn', 'never'], // Prettier
  'comma-spacing': ['warn', { before: false, after: true }], // Prettier
  'comma-style': ['warn', 'last'], // Prettier
  complexity: ['warn', { max: 20 }],
  'computed-property-spacing': ['warn', 'never'], // Prettier
  'consistent-return': ['off'],
  'consistent-this': ['off'],
  'constructor-super': ['error'], // ESLint recommended, ts(2335) & ts(2377)
  curly: ['off'],
  'default-case': ['off'],
  'default-case-last': ['warn'],
  'default-param-last': ['warn'],
  'dot-location': ['warn', 'property'], // Prettier
  'dot-notation': ['off'], // Useless without type awareness
  'eol-last': ['warn', 'always'], // Prettier
  eqeqeq: ['error', 'smart'],
  'for-direction': ['error'], // ESLint recommended
  'func-call-spacing': ['warn', 'never'], // Prettier
  'func-name-matching': ['off'],
  'func-names': ['off'],
  'func-style': ['off'], // Don't have preference
  'function-call-argument-newline': ['warn', 'consistent'], // Prettier
  'function-paren-newline': ['warn', 'consistent'], // Prettier
  'generator-star-spacing': ['warn', { before: false, after: true }], // Prettier
  'getter-return': ['error', { allowImplicit: true }], // ESLint recommended, ts(2378)
  'grouped-accessor-pairs': ['warn', 'anyOrder'],
  'guard-for-in': ['off'],
  'id-denylist': ['off'],
  'id-length': ['off'],
  'id-match': ['off'],
  'implicit-arrow-linebreak': ['warn', 'beside'], // Prettier
  indent: ['warn', 2], // Prettier
  'init-declarations': ['off'],
  'jsx-quotes': ['warn', 'prefer-single'], // Prettier
  'key-spacing': [
    'warn',
    { beforeColon: false, afterColon: true, mode: 'strict' }
  ], // Prettier
  'keyword-spacing': ['warn', { before: true, after: true }], // Prettier
  'line-comment-position': ['off'],
  'linebreak-style': ['warn', 'unix'], // Prettier
  'lines-around-comment': ['off'],
  'lines-between-class-members': ['off'],
  'logical-assignment-operators': [
    'warn',
    'always',
    { enforceForIfStatements: false }
  ],
  'max-classes-per-file': ['off'],
  'max-depth': ['warn', { max: 6 }],
  'max-len': ['warn', { code: 80, tabWidth: 2, ignoreComments: true }], // Prettier
  'max-lines': ['warn', 500],
  'max-lines-per-function': ['off'],
  'max-nested-callbacks': ['warn', { max: 10 }],
  'max-params': ['warn', { max: 3 }],
  'max-statements': ['off'],
  'max-statements-per-line': ['off'], // Prettier
  'multiline-comment-style': ['off'],
  'multiline-ternary': ['off'], // Prettier
  'new-cap': ['warn'],
  'new-parens': ['warn', 'always'], // Prettier
  'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }], // Prettier
  'no-alert': ['off'],
  'no-array-constructor': ['error'], // typescript-eslint
  'no-async-promise-executor': ['error'], // ESLint recommended
  'no-await-in-loop': ['off'],
  'no-bitwise': ['off'],
  'no-caller': ['off'],
  'no-case-declarations': ['error'], // ESLint recommended
  'no-class-assign': ['error'], // ESLint recommended
  'no-compare-neg-zero': ['error'], // ESLint recommended
  'no-cond-assign': ['off'], // ESLint recommended
  'no-confusing-arrow': ['off'],
  'no-console': ['off'],
  'no-const-assign': ['error'], // ESLint recommended, ts(2588)
  'no-constant-binary-expression': ['warn'],
  'no-constant-condition': ['error', { checkLoops: false }], // ESLint recommended
  'no-constructor-return': ['error'],
  'no-continue': ['off'],
  'no-control-regex': ['off'], // ESLint recommended
  'no-debugger': ['off'], // ESLint recommended
  'no-delete-var': ['error'], // ESLint recommended
  'no-div-regex': ['off'],
  'no-dupe-args': ['error'], // ESLint recommended, ts(2300)
  'no-dupe-class-members': ['error'], // ESLint recommended, ts(2393) & ts(2300)
  'no-dupe-else-if': ['error'], // ESLint recommended
  'no-dupe-keys': ['error'], // ESLint recommended, ts(1117)
  'no-duplicate-case': ['error'], // ESLint recommended
  'no-duplicate-imports': ['off'], // import/no-duplicates
  'no-else-return': ['off'],
  // 'no-empty': ['warn', { allowEmptyCatch: true }], // ESLint recommended
  'no-empty': ['off'],
  'no-empty-character-class': ['off'], // ESLint recommended
  'no-empty-function': ['off'],
  'no-empty-pattern': ['warn'], // ESLint recommended
  'no-empty-static-block': ['off'],
  'no-eq-null': ['off'], // eqeqeq
  'no-eval': ['error'],
  'no-ex-assign': ['error'], // ESLint recommended
  'no-extend-native': ['error'],
  'no-extra-bind': ['warn'],
  'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: false }], // ESLint recommended
  'no-extra-label': ['off'],
  'no-extra-parens': ['warn'], // Prettier
  'no-extra-semi': ['warn'], // ESLint recommended, Prettier
  'no-fallthrough': [
    'error',
    { commentPattern: '/falls?s?through/i', allowEmptyCase: true }
  ], // ESLint recommended
  'no-floating-decimal': ['warn'], // Prettier
  'no-func-assign': ['error'], // ESLint recommended, ts(2539)
  'no-global-assign': ['error'], // ESLint recommended
  'no-implicit-coercion': ['off'],
  'no-implicit-globals': ['off'],
  'no-implied-eval': ['error'],
  'no-import-assign': ['error'], // ESLint recommended, ts(2539) & ts(2540)
  'no-inline-comments': ['off'],
  'no-inner-declarations': ['error', 'functions'], // ESLint recommended
  'no-invalid-regexp': ['error'], // ESLint recommended
  'no-invalid-this': ['error'],
  'no-irregular-whitespace': [
    'warn',
    {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true
    }
  ], // ESLint recommended
  'no-iterator': ['off'],
  'no-label-var': ['off'],
  'no-labels': ['off'],
  'no-lone-blocks': ['off'],
  'no-lonely-if': ['off'],
  'no-loop-func': ['error'],
  'no-loss-of-precision': ['error'], // ESLint recommended
  'no-magic-numbers': ['off'],
  'no-misleading-character-class': ['warn'], // ESLint recommended
  'no-mixed-operators': ['warn'], // Prettier
  'no-mixed-spaces-and-tabs': ['warn'], // ESLint recommended, Prettier
  'no-multi-assign': ['off'],
  'no-multi-spaces': ['warn'], // Prettier
  'no-multi-str': ['off'],
  'no-multiple-empty-lines': ['warn'], // Prettier
  'no-negated-condition': ['warn'],
  'no-nested-ternary': ['off'],
  'no-new': ['error'],
  'no-new-func': ['error'],
  'no-new-native-nonconstructor': ['error'],
  'no-new-object': ['error'],
  'no-new-symbol': ['error'], // ESLint recommended, ts(7009)
  'no-new-wrappers': ['error'],
  'no-nonoctal-decimal-escape': ['error'], // ESLint recommended
  'no-obj-calls': ['error'], // ESLint recommended, ts(2349)
  'no-octal': ['error'], // ESLint recommended
  'no-octal-escape': ['error'],
  'no-param-reassign': ['off'],
  'no-plusplus': ['off'],
  'no-promise-executor-return': ['warn'],
  'no-proto': ['off'],
  'no-prototype-builtins': ['error'], // ESLint recommended
  'no-redeclare': ['error'], // ESLint recommended, ts(2451)
  'no-regex-spaces': ['warn'], // ESLint recommended
  'no-restricted-exports': ['off'],
  'no-restricted-globals': ['off'],
  'no-restricted-imports': ['off'],
  'no-restricted-properties': ['off'],
  'no-restricted-syntax': ['off'],
  'no-return-assign': ['warn', 'except-parens'], // Prettier
  'no-return-await': ['off'],
  'no-script-url': ['off'],
  'no-self-assign': ['warn'], // ESLint recommended
  'no-self-compare': ['warn'],
  'no-sequences': ['off'],
  'no-setter-return': ['warn'], // ESLint recommended, ts(2408)
  'no-shadow': ['off'],
  'no-shadow-restricted-names': ['error'], // ESLint recommended
  'no-sparse-arrays': ['off'], // ESLint recommended
  'no-tabs': ['warn'], // Prettier
  'no-template-curly-in-string': ['off'],
  'no-ternary': ['off'],
  'no-this-before-super': ['error'], // ESLint recommended, ts(2376)
  'no-throw-literal': ['off'], // Too many limitations
  'no-trailing-spaces': ['warn'], // Prettier
  'no-undef': ['error'], // ESLint recommended, ts(2304)
  'no-undef-init': ['off'],
  'no-undefined': ['off'],
  'no-underscore-dangle': ['off'],
  'no-unexpected-multiline': ['warn'], // ESLint recommended
  'no-unmodified-loop-condition': ['warn'],
  'no-unneeded-ternary': ['warn'],
  'no-unreachable': ['warn'], // ESLint recommended, ts(7027)
  'no-unreachable-loop': ['off'],
  'no-unsafe-finally': ['error'], // ESLint recommended
  'no-unsafe-negation': ['error'], // ESLint recommended, ts(2365) & ts(2360) & ts(2358)
  'no-unsafe-optional-chaining': [
    'error',
    { disallowArithmeticOperators: false }
  ], // ESLint recommended
  'no-unused-expressions': [
    'warn',
    { allowShortCircuit: true, allowTernary: true }
  ],
  'no-unused-labels': ['warn'], // ESLint recommended
  'no-unused-private-class-members': ['warn'],
  'no-unused-vars': [
    'warn',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
  ], // ESLint recommended, ts(6133), typescript-eslint
  'no-use-before-define': [
    'error',
    {
      variables: true,
      functions: false,
      classes: true,
      allowNamedExports: false
    }
  ],
  'no-useless-backreference': ['error'], // ESLint recommended
  'no-useless-call': ['off'],
  'no-useless-catch': ['off'], // ESLint recommended
  'no-useless-computed-key': ['warn'],
  'no-useless-concat': ['off'],
  'no-useless-constructor': ['warn'],
  'no-useless-escape': ['warn'], // ESLint recommended
  'no-useless-rename': ['off'],
  'no-useless-return': ['warn'],
  'no-var': ['error'], // ts transpiles let/const to var, so no need for vars any more
  'no-void': ['off'],
  'no-warning-comments': ['off'],
  'no-whitespace-before-property': ['warn'], // Prettier
  'no-with': ['error'], // ESLint recommended
  'nonblock-statement-body-position': ['off'], // Prettier
  'object-curly-newline': ['warn', { consistent: true }], // Prettier
  'object-curly-spacing': ['warn', 'always'], // Prettier
  'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }], // Prettier
  'object-shorthand': ['warn', 'always'],
  'one-var': ['off'],
  'one-var-declaration-per-line': ['off'],
  'operator-assignment': ['warn', 'always'],
  'operator-linebreak': [
    'warn',
    'after',
    { overrides: { '?': 'before', ':': 'before' } }
  ], // Prettier
  'padded-blocks': ['off'], // Prettier
  'padding-line-between-statements': ['off'], // Prettier, Time-consuming to configure but could be worth it
  'prefer-arrow-callback': ['warn'],
  'prefer-const': ['warn'], // ts provides better types with const
  'prefer-destructuring': ['off'],
  'prefer-exponentiation-operator': ['off'],
  'prefer-named-capture-group': ['off'],
  'prefer-numeric-literals': ['off'],
  'prefer-object-has-own': ['warn'],
  'prefer-object-spread': ['warn'],
  'prefer-promise-reject-offs': ['off'],
  'prefer-regex-literals': ['off'],
  'prefer-rest-params': ['warn'], // ts provides better types with rest args over arguments
  'prefer-spread': ['warn'], // ts transpiles spread to apply, so no need for manual apply
  'prefer-template': ['warn'],
  'quote-props': ['warn', 'as-needed'], // Prettier
  quotes: ['error', 'single'], // Prettier
  radix: ['warn', 'as-needed'],
  'require-atomic-updates': ['error'],
  'require-await': ['error'],
  'require-unicode-regexp': ['off'],
  'require-yield': ['error'], // ESLint recommended
  'rest-spread-spacing': ['warn', 'never'], // Prettier
  semi: ['warn', 'always'], // Prettier
  'semi-spacing': ['warn', { before: false, after: false }], // Prettier
  'semi-style': ['warn', 'last'], // Prettier
  'sort-imports': ['off'], // No auto fix
  'sort-keys': ['off'], // No auto fix
  'sort-vars': ['off'], // No auto fix
  'space-before-blocks': ['warn', 'always'], // Prettier
  'space-before-function-paren': ['warn', 'always'], // Prettier, Prettier remove space for named function
  'space-in-parens': ['warn', 'never'], // Prettier
  'space-infix-ops': ['warn', { int32Hint: false }], // Prettier
  'space-unary-ops': ['warn', { words: true, nonwords: false }], // Prettier
  'spaced-comment': ['off'],
  strict: ['off'],
  'switch-colon-spacing': ['warn', { before: false, after: true }], // Prettier
  'symbol-description': ['off'],
  'template-curly-spacing': ['warn', 'never'], // Prettier
  'template-tag-spacing': ['warn', 'never'], // Prettier
  'unicode-bom': ['warn', 'never'],
  'use-isnan': ['error'], // ESLint recommended
  'valid-typeof': ['error'], // ESLint recommended, ts(2367)
  'vars-on-top': ['off'],
  'wrap-iife': ['warn', 'outside'], // Prettier
  'wrap-regex': ['off'], // Prettier
  'yield-star-spacing': ['warn', { before: false, after: true }],
  yoda: ['warn', 'never', { exceptRange: true }]
};
