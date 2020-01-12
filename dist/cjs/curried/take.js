"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const take_1 = require("../uncurried/take");
/**
 * @example
 * take(3)([1, 2, 3, 4, 5]) // (1 2 3)
 * take(3)('foobar') // (f o o)
 */
exports.take = (amount) => (it) => take_1.take(it, amount);
//# sourceMappingURL=take.js.map