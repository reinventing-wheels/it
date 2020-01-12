/**
 * @example
 * range() // (0 1 2 3 4 …)
 * range(0, 5) // (0 1 2 3 4)
 * range(1, 10, 2) // (1 3 5 7 9)
 */
export function* range(start = 0, stop = Infinity, step = 1) {
    for (let n = start; n < stop; n += step)
        yield n;
}
//# sourceMappingURL=range.js.map