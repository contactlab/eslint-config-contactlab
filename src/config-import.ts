export = {
  plugins: ['import'],

  rules: {
    'import/no-deprecated': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', ['sibling', 'index']],
        pathGroups: [
          {
            pattern: 'classcat',
            group: 'index',
            position: 'after'
          },
          {
            pattern: './style.pcss',
            group: 'index',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
};
