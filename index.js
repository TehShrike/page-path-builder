var parser = require('./path-parser')

module.exports = function(pathStr, parameters) {
	var parsed

	if (typeof pathStr === 'string') {
		parsed = parser(pathStr)
	} else {
		parsed = pathStr
	}

	var allTokens = parsed.allTokens
	var regex = parsed.regex

	if (parameters) {
		var path =  allTokens.map(function(bit) {
			if (bit.string) {
				return bit.string
			}

			if (!bit.optional && !parameters[bit.name]) {
				throw new Error('Must supply argument ' + bit.name + ' for path ' + pathStr)
			}

			return parameters[bit.name] ? (bit.delimiter + encodeURIComponent(parameters[bit.name])) : ''
		}).join('')

		if (!regex.test(path)) {
			throw new Error('Provided arguments do not match the original arguments')
		}

		return path
	} else {
		return parsed
	}
}
