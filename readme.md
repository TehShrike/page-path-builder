[![Build Status](https://travis-ci.org/TehShrike/page-path-builder.svg)](https://travis-ci.org/TehShrike/page-path-builder)

For those times when you want to programmatically generate a link to page.js route.

Usage
=======

```js
var buildPath = require('page-path-builder')

var path = buildPath('/wat/:huh/yeah', { huh: 'go figure' })

console.log(path) // => /wat/go%20figure/yeah
```

Or parse a path once for more efficient url construction later:

```js
var parsedPath = buildPath('/page/:id')

var path = buildPath(parsedPath, { id: 13 })

console.log(path) // => /page/13

var anotherPath = buildPath(parsedPath, { id: 1337 })

console.log(anotherPath) // => /page/1337
```
