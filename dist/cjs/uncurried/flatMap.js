"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * flatMap([1, 2, 3], n => [-n, +n]) // (-1, 1, -2, 2, -3, 3)
 * flatMap(['foo', 'bar'], s => s) // ('f', 'o', 'o', 'b', 'a', 'r')
 */
function* flatMap(it, fn) {
    let i = 0;
    for (const value of it)
        yield* fn(value, i++);
}
exports.flatMap = flatMap;
