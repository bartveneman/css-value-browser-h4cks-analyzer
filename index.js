module.exports = value => {
	// A value that ends with any of these character sequences
	// is considered a browser hack
	return ['\\9', '!ie', ';]', ';)'].some(character => value.endsWith(character))
}
