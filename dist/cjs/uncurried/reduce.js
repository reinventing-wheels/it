"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * reduce([1, 2, 3], (acc, n) => acc + n, 0) // 6
 * reduce([1, 2, 3], (acc, n) => acc + n, '') // '123'
 * reduce('foo', (map, c, i) => map.set(i, c), new Map) // Map
 */
function reduce(it, fn, first) {
    let i = 0, acc = first;
    for (const value of it)
        acc = fn(acc, value, i++);
    return acc;
}
exports.reduce = reduce;
