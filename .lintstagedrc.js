module.exports = {
  '*.{tsx, ts}': ['prettier --write .', 'eslint --fix components/**/*.t{s,sx}'],
};
