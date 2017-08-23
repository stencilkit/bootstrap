exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['my-name'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
