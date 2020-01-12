"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * @example
 * dropWhile([1, 2, 3, 4, 5], n => n < 3) // (3 4 5)
 * dropWhile('foobar', c => c != 'b') // (b a r)
 */
function* dropWhile(it, fn) {
    const itʹ = util_1.lock(it);
    let i = 0;
    for (const value of itʹ) {
        if (!fn(value, i++)) {
            yield value;
            yield* itʹ;
        }
    }
}
exports.dropWhile = dropWhile;
//# sourceMappingURL=dropWhile.js.map