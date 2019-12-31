/**
 * @example
 * forEach([1, 2, 3, 4, 5], n => log(n))
 * forEach('foobar', (c, i) => log(i, c))
 */
export function forEach(it, fn) {
    let i = 0;
    for (const value of it)
        fn(value, i++);
}
//# sourceMappingURL=forEach.js.map