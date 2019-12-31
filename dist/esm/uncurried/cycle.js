/**
 * @example
 * cycle([1, 2, 3], 2) // (1, 2, 3, 1, 2, 3)
 * cycle([1, 2, 3]) // (1, 2, 3, 1, 2, 3, …)
 * cycle('foo') // ('f', 'o', 'o', 'f', 'o', …)
 */
export function* cycle(it, times = Infinity) {
    for (let i = 0; i < times; i++)
        yield* it;
}
//# sourceMappingURL=cycle.js.map