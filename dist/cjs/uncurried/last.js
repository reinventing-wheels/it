"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * last([1, 2, 3]) // 3
 * last('foobar') // 'r'
 */
function last(it) {
    let value;
    for (value of it)
        ; // noop
    return value;
}
exports.last = last;
