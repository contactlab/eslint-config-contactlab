# eslint-config-contactlab

![Node CI](https://github.com/contactlab/eslint-config-contactlab/workflows/Node%20CI/badge.svg)

ContactLab ESLint extensible and sharable configuration.

It also includes configuration for [`@typescript-eslint`](https://github.com/typescript-eslint) in order to provide support for TypeScript files linting.

## Usage

Install the configuration as a npm package:

```sh
$ npm install --save-dev eslint-config-contactlab

# --- OR ---

$ yarn add --dev eslint-config-contactlab
```

and then add it as extension in your ESLint configuration file:

```js
// for example in your .eslinrc.js or package.json

{
  "extends": "contactlab"
}

```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## TypeScript

If you need to lint TypeScript files please use the `contactlab/typescript` config

```js
// in your .eslinrc.js or package.json

{
  "extends": "contactlab/typescript"
}
```

and run the `eslint` CLI with `--ext .js,.jsx,.ts,.tsx` [option](https://eslint.org/docs/user-guide/command-line-interface#ext).

You can also disable rules on file basis (in case they collide with your configuration) with the [`overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) key:

```js
// in your .eslintrc.js file

module.exports = {
  // ...your configuration

  overrides: [
    // Disable typescript rules for tests and js files
    {
      files: ['*.test.ts*', '*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
```

### ESLint Flat Config

```js
// For projects using ESLint flat config (eslint.config.js), include the config directly:

import contactlab from 'eslint-config-contactlab';
// or, if you only want TypeScript rules:
// import typescriptConfig from 'eslint-config-contactlab/dist/typescript.js';

export default [...contactlab];
```

This replaces the old .eslintrc "extends": "contactlab" approach.

> ⚡ Tip: When migrating to ESLint flat config, replace `"extends": "contactlab"` with `import contactlab from 'eslint-config-contactlab';` in your `eslint.config.js`.

See the [ESlint config docs](https://eslint.org/docs/latest/use/configure/migration-guide) for more information.

## Rules

ES configuration already extends the default `eslint:recommended` rules.

TypeScript configuration the `@typescript-eslint/recommended-type-checked` and `@typescript-eslint/stylistic-type-checked` rules.

ESLint Flat Config Type-aware TypeScript rules require a valid `parserOptions.project` (tsconfig.eslint.json by convention). Without it, only syntax-only rules run.

## Older Nodejs versions

### v16.x, v18.x

Since **v13.0.0** `eslint-config-contactlab` supports **Nodejs version >= 20.x**

If you need support for **previous versions** please use **v12.0.0**

### v14.x

Since **v10.0.0** `eslint-config-contactlab` supports **Nodejs version >= 16.x**

If you need support for **previous versions** please use **v9.0.0**

### v12.x

Since **v6.0.0** `eslint-config-contactlab` supports **Nodejs version >= 14.x**

If you need support for **previous versions** please use **v5.0.0**

### v10.x

Since **v5.0.0** `eslint-config-contactlab` supports **Nodejs version >= 12.x**

If you need support for **previous versions** please use **v4.0.0**

### v8.x

Since **v4.0.0** `eslint-config-contactlab` supports **Nodejs version >= 10.x**

If you need support for **previous versions** please use **v3.0.0**

### v6.x

Since **v3.0.0** `eslint-config-contactlab` supports **Nodejs version >= 8.x**

If you need support for **older versions** please use **v2.0.2**
