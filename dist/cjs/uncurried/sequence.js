"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * sequence(n => n+1, 1) // (1, 2, 3, 4, 5, …)
 * sequence(n => n*2, 1, 7) // (1, 2, 4, 8, 16, 32, 64)
 * sequence(n => n**2, 2, 5) // (2, 4, 16, 256, 65536)
 */
function* sequence(fn, first, length = Infinity) {
    for (let i = 0, value = first; i < length; value = fn(value, i++))
        yield value;
}
exports.sequence = sequence;
