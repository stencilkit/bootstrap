exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['bs-alert', 'bs-badge', 'bs-button'] },
    { components: ['bs-alert-link', 'bs-alert-heading'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
