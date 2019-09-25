module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': ['airbnb'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': false
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'node',
  ],
  'rules': {
    // 'react/prop-types': 0,
    // 'import/no-unresolved': 0,
    // 'no-return-await': 0,
  }
};
