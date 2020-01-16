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
            pattern: './style.*',
            group: 'index',
            position: 'after'
          },
          {
            pattern: './*.html',
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
