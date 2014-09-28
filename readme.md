
For those times when you want to programmatically generate a link to page.js route.

Usage
=======

	var buildPath = require('page-path-builder')

	var path = buildPath('/wat/:huh/yeah', {
		huh: 'go figure'
	})

Or parse a path once for more efficient url construction later:

	var parsedPath = buildPath('/page/:id')

	var path = buildPath(parsedPath, {
		id: 13
	})

	var anotherPath = buildPath(parsedPath, {
		id: 1337
	})

