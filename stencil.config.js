exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['bs-badge', 'bs-button'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
