/**
 * @example
 * nth([1, 2, 3], 1) // 2
 * nth('foobar', 0) // f
 * nth('foobar', 3) // b
 */
export function nth(it, n) {
    let i = 0;
    for (const value of it)
        if (i++ >= n)
            return value;
}
//# sourceMappingURL=nth.js.map