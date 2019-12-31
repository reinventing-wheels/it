"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * @example
 * drop([1, 2, 3, 4, 5], 2) // (3, 4, 5)
 * drop('foobar', 3) // ('b', 'a', 'r')
 */
function* drop(it, amount = 1) {
    const itʹ = util_1.lock(it);
    let i = 0;
    for (const value of itʹ) {
        if (i++ >= amount) {
            yield value;
            yield* itʹ;
        }
    }
}
exports.drop = drop;
//# sourceMappingURL=drop.js.map