var buildPath = require('./')

var path = buildPath('/wat/:huh/yeah', { huh: 'go figure' })

console.log(path)

var parsedPath = buildPath('/page/:id')

path = buildPath(parsedPath, { id: 13 })

console.log(path)

var anotherPath = buildPath(parsedPath, { id: 1337 })

console.log(anotherPath)
