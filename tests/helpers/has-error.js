/**
 * Check if there are errors.
 */

// --- Imports
const linter = require('eslint').linter;

// --- Exports
module.exports = hasError;

// --- Public
/**
 * Checks if errors list is empty or not.
 * @param  {string}  code - Code string
 * @param  {object}  rule - Rule to be tested
 * @return {boolean} True if there are errors
 */
function hasError(code, rule) {
  return (linter.verify(code, rule).length > 0);
}
