export = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  plugins: ['node', 'import'],

  extends: ['eslint:recommended', 'plugin:jsdoc/recommended'],

  rules: {
    // --- ES6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'brace-style': 'error',
    camelcase: [
      'error',
      {
        properties: 'never'
      }
    ],
    'comma-dangle': 'error',
    complexity: 'off',
    curly: 'error',
    'default-case': 'off',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'id-match': 'error',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'off',
    'no-console': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-lone-blocks': 'error',
    'no-multiple-empty-lines': 'off',
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'no-script-url': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_$'
      }
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'quote-props': 'off',
    radix: 'error',
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    'spaced-comment': 'error',
    'sort-keys': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'valid-typeof': 'off',

    // --- Node
    'node/global-require': 'error',
    'node/no-unsupported-features/es-syntax': 'off',

    // --- Import
    'import/no-deprecated': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', ['sibling', 'index']],
        pathGroups: [
          {
            pattern: './style.*',
            group: 'index',
            position: 'after'
          },
          {
            pattern: './*.html',
            group: 'index',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc'
        }
      }
    ],

    // --- JSDoc
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['jest-environment']
      }
    ],
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-name': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-check': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'off'
  }
};
