export = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  },

  plugins: ['@typescript-eslint'],

  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:fp-ts/recommended'
  ],

  rules: {
    // --- ES
    'no-shadow': 'off', // Disable basic rule in favor of `@typescript-eslint/no-shadow`

    // --- Typescript
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple'
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: 'Avoid using the `Object` type. Did you mean `object`?',
          Function:
            'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          Number: 'Avoid using the `Number` type. Did you mean `number`?',
          String: 'Avoid using the `String` type. Did you mean `string`?',
          Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
        }
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        VariableDeclarator: 2,
        SwitchCase: 1
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        classes: [
          'public-static-field',
          'public-static-method',
          'protected-static-field',
          'protected-static-method',
          'private-static-field',
          'private-static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method'
        ]
      }
    ],
    '@typescript-eslint/no-duplicate-type-constituents': [
      'error',
      {
        ignoreIntersections: true
      }
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true
      }
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true
      }
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {arguments: false, attributes: false}
      }
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    // --- fp-ts
    'fp-ts/no-module-imports': 'off',
    'fp-ts/no-redundant-flow': 'error',
    'fp-ts/prefer-traverse': 'error',
    'fp-ts/prefer-chain': 'error',
    'fp-ts/prefer-bimap': 'error'
  },

  // Disable no-unsafe rules for tests files
  overrides: [
    {
      files: ['**/test/**/*.ts*', '**/*.{test,spec}.ts*'],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-declaration-merging': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off'
      }
    }
  ]
};
