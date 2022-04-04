# Changelog

## [8.1.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/8.1.0)

**Feature:**

- Ignore unused elements of destructured arrays which start with `_` (#447)

**Dependencies:**

- [Security] Bump minimist from 1.2.5 to 1.2.6 (#441)

## [8.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/8.0.0)

**Breaking:**

- Upgrade to ESLint v8 (#330)

**Dependencies:**

- Bump eslint-plugin-jsdoc from 36.1.1 to 37.0.0 (#325)
- [Security] Bump ansi-regex from 5.0.0 to 5.0.1 (#309)

## [7.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/7.0.0)

**Breaking:**

**Require Node ^12.20 because of:**

- Bump eslint-plugin-jsdoc from 35.4.5 to 36.0.6 (#273)

**Dependencies:**

- Bump typescript from 4.3.5 to 4.4.2 (#293)
- [Security] Bump path-parse from 1.0.6 to 1.0.7 (#280)
- [Security] Bump glob-parent from 5.1.1 to 5.1.2 (#235)

## [6.3.1](https://github.com/contactlab/eslint-config-contactlab/releases/tag/6.3.1)

**Feature:**

- switch off JSDoc no-multi-asterisks rule (#233)

**Dependencies:**

- Bump eslint-plugin-jsdoc from 34.8.2 to 35.1.0 (#222)

## [6.3.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/6.3.0)

**Feature:**

- Disable the `no-shadow` and enable `@typescript-eslint/no-shadow` (#217)

**Internal:**

- drop tests for nodejs v15 in favor of v16 (#219)

## [6.2.1](https://github.com/contactlab/eslint-config-contactlab/releases/tag/6.2.1)

**Fix:**

- Move fp-ts plugin in typescript config only (#209)

**Dependencies:**

- Bump eslint-plugin-jsdoc from 31.6.1 to 34.6.3 (#146, #195, #208)
- [Security] Bump hosted-git-info from 2.8.8 to 2.8.9 (#203)
- Bump eslint-plugin-fp-ts from 0.1.14 to 0.2.1 (#148)
- Bump husky from 4.3.8 to 5.0.9 (#145)
- use node v14 (#144)

## [6.2.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/6.2.0)

**Dependencies:**

- Bump eslint-plugin-jsdoc from 30.7.13 to 31.0.6 (#124)

## [6.1.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/6.1.0)

**Feature:**

- Add Buildo eslint-plugin-fp-ts (#120)

## [6.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/6.0.0)

**Dependencies:**

- Upgrade eslint-plugin-import to ^2.22.1 (#98)
- `[breaking]` Upgrade typescript to ^4.1.2 (#98)
- `[breaking]` Upgrade @typescript-eslint/eslint-plugin to ^4.9.1 (#98)
- `[breaking]` Upgrade @typescript-eslint/parser to ^4.9.1 (#98)
- `[breaking]` Upgrade eslint-plugin-jsdoc to ^30.7.8 (#98)

## [5.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/5.0.0)

**Breaking:**

- Upgrade to ESLint v7 (#94)

## [4.2.2](https://github.com/contactlab/eslint-config-contactlab/releases/tag/4.2.2)

**Dependencies:**

- Use official eslint-plugin-import (#90)

## [4.2.1](https://github.com/contactlab/eslint-config-contactlab/releases/tag/4.2.1)

**Dependencies:**

- chore(deps): bump eslint-plugin-jsdoc from 20.3.1 to 21.0.0 (#81)

## [4.2.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/4.2.0)

**Fix:**

- Fix TypeScript dependency (#79)

## [4.1.1](https://github.com/contactlab/eslint-config-contactlab/releases/tag/4.1.1)

:warning: **This version is broken in _non-typescript_ environments. Please use v4.2.0 instead**

**Fix**

- removed too specific `camelcase` rule option (#72)

## [4.1.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/4.1.0)

**Feature:**

- handle styles and .html imports (#69)
- add CHANGELOG (#70)

## [4.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/4.0.0)

**Feature:**

- `[breaking][dependencies]` typescript-eslint integration (#64)

## [3.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/3.0.0)

**Breaking:**

- upgrade to eslint v6.0.0 and drop support for Nodejs < v8.10 (#39)

## [2.0.2](https://github.com/contactlab/eslint-config-contactlab/releases/tag/2.0.2)

**Internal:**

- Fix package description and author + minor dev fixes (#24)

## [2.0.1](https://github.com/contactlab/eslint-config-contactlab/releases/tag/2.0.1)

**Dependencies:**

- dependencies upgrade

## [2.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/2.0.0)

**Breaking:**

- drop support for node v4 (#6)
- use supported ES6 feature - from node v6

## [1.1.1](https://github.com/contactlab/eslint-config-contactlab/releases/tag/1.1.1)

**Feature:**

- allow tagged string templates (#8)

**Dependencies:**

- Update sinon to the latest version (#7)

## [1.1.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/1.1.0)

**Feature:**

- Ignore function args when match pattern
- Travis test only stable versions + cache node_modules

## [1.0.0](https://github.com/contactlab/eslint-config-contactlab/releases/tag/1.0.0)

First ContactLab version of eslint-config package
