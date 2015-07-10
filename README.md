README
======

Requirements
------------

```shell
npm install karma-cli -g
npm install webpack -g
npm install
```

Webpack CLI
-------

`webpack` kicks off a hot-loaded development server
`webpack -p` builds for production (minification)
`webpack --watch` continuously does incremental build for development (fast!)
`webpack -d` includes source maps

> BUILD_DEV=1 BUILD_PRERELEASE=1 webpack

NPM Scripts
-----------

`npm start` starts webpack dev server
`npm run build` kicks off a development build
`npm run deploy` kicks off a production build
`npm run test` starts running tests

TODO
----

x fingerprint
* autoprefixer https://github.com/passy/autoprefixer-loader
* scss-lint
* code coverage https://github.com/deepsweet/istanbul-instrumenter-loader
* middleware
* dockerize
* css fouc (see react-starter)
* notificatiofn
