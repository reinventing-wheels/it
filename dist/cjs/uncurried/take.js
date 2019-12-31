"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * @example
 * take([1, 2, 3, 4, 5], 3) // (1, 2, 3)
 * take('foobar', 3) // ('f', 'o', 'o')
 */
function* take(it, amount = 1) {
    let i = 0;
    for (const value of amount > 0 ? util_1.lock(it) : []) {
        yield value;
        if (++i >= amount)
            return;
    }
}
exports.take = take;
//# sourceMappingURL=take.js.map