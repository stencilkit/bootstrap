exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['bs-badge'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
