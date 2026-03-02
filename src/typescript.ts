import type {Linter} from 'eslint';
import fpTsPlugin from 'eslint-plugin-fp-ts';
import tseslint from 'typescript-eslint';

const config: Linter.Config[] = [
  // 1️⃣ Base TS (non type-checked)
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...tseslint.configs.recommended[0]
  },

  // 2️⃣ Type-aware SOLO per TS
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...tseslint.configs.recommendedTypeChecked[0],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: process.cwd()
      }
    },
    plugins: {
      'fp-ts': fpTsPlugin
    },
    rules: {
      // override ES
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: {var: 1, let: 2, const: 3}
        }
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // tutte le regole TS
      '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {allowExpressions: true}
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          classes: [
            /* ... */
          ]
        }
      ],
      '@typescript-eslint/no-duplicate-type-constituents': [
        'error',
        {ignoreIntersections: true}
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {allowSingleExtends: true}
      ],
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': ['error', {ignoreRestArgs: true}],
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {ignoreParameters: true}
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {checksVoidReturn: {arguments: false, attributes: false}}
      ],
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_'}
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/unified-signatures': 'error',

      // fp-ts
      'fp-ts/no-module-imports': 'off',
      'fp-ts/no-redundant-flow': 'error',
      'fp-ts/prefer-traverse': 'error',
      'fp-ts/prefer-chain': 'error',
      'fp-ts/prefer-bimap': 'error'
    }
  },

  // 3️⃣ Overrides test TS
  {
    files: ['**/test/**/*.ts', '**/*.{test,spec}.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off'
    }
  }
];

export default config;
