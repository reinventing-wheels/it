/**
 * @example
 * filter([1, 2, 3, 4, 5], n => n%2 == 0) // (2, 4)
 * filter([1, 2, 3, 4, 5], n => n%2 != 0) // (1, 3, 5)
 * filter('foobar', c => c != 'o') // ('f', 'b', 'a', 'r')
 */
export function* filter(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            yield value;
}
//# sourceMappingURL=filter.js.map