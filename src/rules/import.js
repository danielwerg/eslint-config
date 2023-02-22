/** @type {import('eslint-define-config').Rules} */
exports.importRules = {
  'import/order': [
    'warn',
    {
      // ignore 'object' and 'type'
      groups: [
        'external',
        'builtin',
        'internal',
        ['sibling', 'parent', 'index']
      ],
      // Could be external but almost never used as such https://nodejs.org/api/packages.html#packages_subpath_imports
      pathGroups: [
        {
          pattern: '#/**',
          group: 'internal'
        }
      ],
      'newlines-between': 'always'
    }
  ],
  'import/no-duplicates': ['warn', { considerQueryString: true }]
};
