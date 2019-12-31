/**
 * @example
 * some([1, 2, 3], n => n < 2) // true
 * some([1, 2, 3], n => n < 1) // false
 */
export function some(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            return true;
    return false;
}
//# sourceMappingURL=some.js.map