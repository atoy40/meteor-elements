# meteor-elements

meteor-elements is, first of all, a set of Polymer web components
integrating Meteor API (collections, methods and more) in the form of
Polymer elements (used as html tags). Thoses elements (html files)
are bundles into a Bower package with the same name as this Meteor
package.

The only goal of this Meteor package is to help developer to start
application using Polymer and meteor-elements

## Create a Meteor/Polymer apps

```bash
meteor create mypolymerapp
cd mypolymerapp
meteor add atoy40:meteor-elements
```

Then, you'll need three files :

### [prjroot]/config.vulcanize
```json
{
  "polyfill": "/bower_components/webcomponentsjs/webcomponents.min.js",
  "useShadowDom": false,
  "imports": [
    "/components/mypolymerapp.html"
  ]
}
```

imports must contains at least the main component of your Polymer apps.
In this example this file is located in public/components/mypolymerapp.html

### [prjroot]/lib/.bowerrc
```json
{
  "directory":"../public/bower_components"
}
```

It is located in the ib directory to be handled before the
config.vulcanize file.

### [prjroot]/lib/bower.json
```json
{
  "name": "mypolymerapp",
  "version": "0.0.0",
  "authors": [
    "me"
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

This is probably the most important file, because it contains Polymer
itself and meteor-elements components. You can add or remove
dependencies according to the elements you want to use.

