console.log("Hello Git!");

/**
 * Calculate the sum of numeric values in an array-like input.
 * - Accepts arrays or iterable objects.
 * - Coerces numeric strings to numbers.
 * - Ignores non-numeric values (NaN after coercion).
 * @param {Iterable<number|string>} items
 * @returns {number}
 */
function sum(items) {
	if (items == null) return 0;
	// If it's a single number, return it
	if (typeof items === 'number' && !Number.isNaN(items)) return items;

	let total = 0;
	try {
		for (const v of items) {
			const n = typeof v === 'number' ? v : Number(v);
			if (!Number.isNaN(n)) total += n;
		}
	} catch (e) {
		// Not iterable — try to coerce as number
		const n = Number(items);
		return Number.isNaN(n) ? 0 : n;
	}
	return total;
}

// Export for CommonJS
module.exports = { sum };

// Quick local test when run directly
if (require.main === module) {
	console.log('sum([1, 2, 3]) =', sum([1, 2, 3]));
	console.log("sum(['4','5', 'foo', null]) =", sum(['4','5', 'foo', null]));
}
