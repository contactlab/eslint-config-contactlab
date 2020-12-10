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

## Rules

ES configuration already extends the default `eslint:recommended` rules.

TypeScript configuration the `plugin:@typescript-eslint/recommended` rules.

## Older Nodejs versions

### v10.x

Since **v5.0.0** `eslint-config-contactlab` supports **Nodejs version >= 12.x**

If you need support for **previous versions** please use **v4.0.0**

### v8.x

Since **v4.0.0** `eslint-config-contactlab` supports **Nodejs version >= 10.x**

If you need support for **previous versions** please use **v3.0.0**

### v6.x

Since **v3.0.0** `eslint-config-contactlab` supports **Nodejs version >= 8.x**

If you need support for **older versions** please use **v2.0.2**
