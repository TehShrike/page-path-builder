var test = require('tape')
var buildPath = require('./')

test('basic path construction', function(t) {
	var path = buildPath('/wat/:huh/yeah', {
		huh: 'go figure'
	})
	t.equal(path, '/wat/go%20figure/yeah', 'string output matches expected path')

	t.end()
})

test('using the parsed path more than once', function(t) {
	var parsedPath = buildPath('/page/:id')

	var path = buildPath(parsedPath, {
		id: 13
	})

	t.equal(path, '/page/13', 'first path built correctly')

	var anotherPath = buildPath(parsedPath, {
		id: 1337
	})

	t.equal(anotherPath, '/page/1337', 'second path built correctly')

	t.end()
})

test('unnamed parameters', function(t) {
	var path = buildPath('/post/(\\d+)/lol', {
		0: '77'
	})

	t.equal(path, '/post/77/lol')

	t.end()
})

test('with an optional parameter', function(t) {
	var path = buildPath('/butts/:thingy/:subpage?', {
		thingy: 'HERE',
		subpage: 'yes'
	})

	t.equal(path, '/butts/HERE/yes')

	var anotherPath = buildPath('/butts/:thingy/:subpage?', {
		thingy: 'justtheone'
	})

	t.equal(anotherPath, '/butts/justtheone')

	t.end()
})

test('missing arguments results in a thrown error', function(t) {
	t.throws(function() {
		buildPath('/butts/:thingy/:subpage?', {})
	}, /Must supply argument thingy/)

	t.throws(function() {
		buildPath('/butts/:thingy', {})
	}, /Must supply argument thingy/)

	t.end()
})

test('throws an error if the input would fail the original regular expression', function(t) {
	t.throws(function() {
		buildPath('/shenanigans/(\\d+)', {
			0: 'not a number'
		})
	}, /Provided arguments do not match the original arguments/)
	t.end()
})