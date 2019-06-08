"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * takeWhile([1, 2, 3, 4, 5], n => n < 4) // (1, 2, 3)
 * takeWhile('foobar', c => c != 'b') // ('f', 'o', 'o')
 */
function* takeWhile(it, fn) {
    let i = 0;
    for (const value of it) {
        if (!fn(value, i++))
            return;
        yield value;
    }
}
exports.takeWhile = takeWhile;
