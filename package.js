Package.describe({
  name: 'atoy40:meteor-elements',
  version: '0.0.1',
  summary: 'Integrate Meteor API with Polymer and web elements',
  git: 'https://github.com/atoy40/meteor-elements.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.imply(['tracker','mongo','session','ejson'],'client');
  api.imply('mquandalle:bower@1.0.0');
  api.imply('differential:vulcanize@3.0.0');
  api.addFiles('meteor-elements.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteor-elements');
  api.addFiles('meteor-elements-tests.js');
});
