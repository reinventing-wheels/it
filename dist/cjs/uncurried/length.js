"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * length([1, 2, 3]) // 3
 * length('foobar') // 6
 */
function length(it) {
    let i = 0;
    for (const _ of it)
        i++;
    return i;
}
exports.length = length;
