export = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: [
    './config-es.js',
    './config-ts.js',
    './config-import.js',
    './config-jsdoc.js'
  ],

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
