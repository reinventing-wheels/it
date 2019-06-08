"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * unique([1, 3, 3, 7]) // (1, 3, 7)
 * unique('foobar') // ('f', 'o', 'b', 'a', 'r')
 */
function* unique(it) {
    const set = new Set();
    for (const value of it) {
        if (!set.has(value)) {
            set.add(value);
            yield value;
        }
    }
}
exports.unique = unique;
