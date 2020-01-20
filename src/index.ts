export = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  extends: ['./config/es.js', './config/import.js', './config/jsdoc.js']
};
