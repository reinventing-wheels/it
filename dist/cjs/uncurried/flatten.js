"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * flatten([[1, 2], [3, 4], [5]]) // (1, 2, 3, 4, 5)
 * flatten(['foo', 'bar']) // ('f', 'o', 'o', 'b', 'a', 'r')
 */
function* flatten(it) {
    for (const value of it)
        yield* value;
}
exports.flatten = flatten;
