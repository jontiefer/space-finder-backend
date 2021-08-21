module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // Disabling eslint rules in favor of typescript-eslint rules
    'no-shadow': 'off',
    'consistent-return': 'off',
    indent: 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    // Enabling non-default typescript-eslint rule
    '@typescript-eslint/no-shadow': ['error'],
    // Modifying indentation
    '@typescript-eslint/indent': [
      'error',
      // Two space indentation is the default in almost all JS/TS style guides
      2,
      // Disabling typescript-eslint indent rules that are known to be buggy (TODO: add link)
      {
        ignoredNodes: ['TSTypeParameterInstantiation'],
        SwitchCase: 1,
      },
    ],
    // using new for side effects is the by-design pattern of CDK
    'no-new': 0,
    // console.log
    'no-console': 0,
    // using snakecase on imports conforms to CDK style
    camelcase: 0,
    // Forcing default export is unnecessarily restrictive
    'import/prefer-default-export': 0,
    // Empty interfaces reduce commit noise if/when members are added to an interface
    '@typescript-eslint/no-empty-interface': 0,
    // Curly-newline on import results in obnoxiously tall import declarations
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
  },
};
