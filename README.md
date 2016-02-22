# meteor-elements

meteor-elements is, first of all, a set of Polymer web components
integrating Meteor API (collections, methods and more) in the form of
Polymer elements (used as html tags). Thoses elements (html files)
are bundles into a Bower package with the same name as this Meteor
package.

The only goal of this Meteor package is to help developer to start
application using Polymer

## Create a Meteor/Polymer apps

```
meteor create mypolymerapp
cd mypolymerapp
meteor add atoy40:meteor-elements
```

Then, you'll need three files :

[prjroot]/config.vulcanize
```
{
  "polyfill": "/bower_components/webcomponentsjs/webcomponents.min.js",
  "useShadowDom": false,
  "imports": [
    "/components/music-app.html"
  ]
}
```

[prjroot]/lib/.bowerrc
```
{
  "directory":"../public/bower_components"
}
```

[prjroot]/lib/bower.json
```
{
  "name": "Polytest",
  "version": "0.0.0",
  "authors": [
    "Anthony Hinsinger <anthony.hinsinger@gmail.com>"
  ],
  "license": "MIT",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "polymer": "Polymer/polymer#~1.0.0",
    "iron-elements": "PolymerElements/iron-elements#~1.0.0",
    "paper-elements": "PolymerElements/paper-elements#~1.0.0",
    "neon-elements": "PolymerElements/neon-elements#~1.0.0",
    "meteor-elements": "atoy40/meteor-elements#~0.1.0"
  },
  "overrides": {
    "webcomponentsjs": { "main": [] }
  }
}
```

