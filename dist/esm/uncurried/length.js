/**
 * @example
 * length([1, 2, 3]) // 3
 * length('foobar') // 6
 */
export function length(it) {
    let i = 0;
    for (const _ of it)
        i++;
    return i;
}
//# sourceMappingURL=length.js.map