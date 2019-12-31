/**
 * @example
 * unique([1, 3, 3, 7]) // (1, 3, 7)
 * unique('foobar') // ('f', 'o', 'b', 'a', 'r')
 */
export function* unique(it) {
    const set = new Set();
    for (const value of it) {
        if (!set.has(value)) {
            set.add(value);
            yield value;
        }
    }
}
//# sourceMappingURL=unique.js.map