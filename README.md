[![Build Status](https://travis-ci.org/contactlab/eslint-config-contactlab.svg?branch=master)](https://travis-ci.org/contactlab/eslint-config-contactlab)

# eslint-config-contactlab

[![Greenkeeper badge](https://badges.greenkeeper.io/contactlab/eslint-config-contactlab.svg)](https://greenkeeper.io/)

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
