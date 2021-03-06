/**
 * @example
 * map([1, 2, 3, 4, 5], n => 2*n) // (2 4 6 8 10)
 * map('foo', c => c.charCodeAt(0)) // (102 111 111)
 */
export function* map(it, fn) {
    let i = 0;
    for (const value of it)
        yield fn(value, i++);
}
//# sourceMappingURL=map.js.map