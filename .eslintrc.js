module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': ['airbnb', 'airbnb/hooks'],
  'parser': 'babel-eslint',
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
    'node/recomented',
  ],
  'rules': {
    // 'react/prop-types': 0,
    // 'import/no-unresolved': 0,
    // 'no-return-await': 0,
  }
};
