module.exports = {
  '*.{tsx, ts}': [
    'prettier --write components/**/*.t{s,sx}',
    'eslint --fix components/**/*.t{s,sx}',
  ],
};
