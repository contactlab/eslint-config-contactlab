# eslint-config-contactlab

[![Build Status](https://clab-dev.visualstudio.com/OSS/_apis/build/status/contactlab.eslint-config-contactlab?branchName=master)](https://clab-dev.visualstudio.com/OSS/_build/latest?definitionId=31&branchName=master)

ContactLab ESLint extensible and sharable configuration.

## Usage

Install the configuration as a npm package:

```sh
$ npm install --save-dev eslint-config-contactlab

# --- OR ---

$ yarn add --dev eslint-config-contactlab
```

and then add it as extension in your ESLint configuration file:

```javascript

// for example in your .eslinrc or package.json

{
  "extends": "contactlab"
}

```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Rules

The configuration already extends the default `eslint:recommended` rules.

Package specific rules can be found in `/rules` folder.

## Nodejs v6.x

Since **v3.0.0** `eslint-config-contactlab` supports **Nodejs version >= 8.x**

If you need support for **older versions** please use **v2.0.2**
