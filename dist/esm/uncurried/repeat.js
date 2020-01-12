/**
 * @example
 * repeat(42) // (42 42 42 …)
 * repeat(42, 5) // (42 42 42 42 42)
 * repeat('foo', 3) // (foo foo foo)
 */
export function* repeat(value, times = Infinity) {
    for (let i = 0; i < times; i++)
        yield value;
}
//# sourceMappingURL=repeat.js.map