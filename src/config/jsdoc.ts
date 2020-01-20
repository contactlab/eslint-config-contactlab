export = {
  extends: ['plugin:jsdoc/recommended'],

  rules: {
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
