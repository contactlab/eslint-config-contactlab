/**
 * Defines ESLint rules and configuration exported by the package
 */

module.exports = {
  extends: ['./rules/commons', './rules/es6'].map(require.resolve) // thank you AirBnB...
};
