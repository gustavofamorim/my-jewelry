/* eslint-disable */
function compareTwoStrings (str2) {
	if (!this.length && !str2.length) return 1 // if both are empty strings
	if (!this.length || !str2.length) return 0 // if only one is empty string
	if (this.toUpperCase() === str2.toUpperCase()) return 1 // identical
	if (this.length === 1 && str2.length === 1) return 0 // both are 1-letter strings

	const pairs1 = wordLetterPairs(this)
	const pairs2 = wordLetterPairs(str2)
	const union = pairs1.length + pairs2.length

	let intersection = 0

	pairs1.forEach(pair1 => {
		for (let i = 0, pair2; (pair2 = pairs2[i]); i++) {
			if (pair1 !== pair2) continue
			intersection++
			pairs2.splice(i, 1)
			break
		}
	})
	return intersection * 2 / union
}

function flattenDeep (arr) {
	return Array.isArray(arr) ? arr.reduce((a, b) => a.concat(flattenDeep(b)) , []) : [arr]
}

function areArgsValid (mainString, targetStrings) {
	if (typeof mainString !== 'string') return false
	if (!Array.isArray(targetStrings)) return false
	if (!targetStrings.length) return false
	if (targetStrings.find(s => typeof s !== 'string')) return false
	return true
}

function letterPairs (str) {
	const pairs = []

	for (let i = 0, max = str.length - 1; i < max; i++) {
		pairs[i] = str.substring(i, i + 2)
	}

	return pairs
}

function wordLetterPairs (str) {
	const pairs = str.toUpperCase().split(' ').map(letterPairs)
	return flattenDeep(pairs)
}

String.prototype.similarity = compareTwoStrings
