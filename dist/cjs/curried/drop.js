"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drop_1 = require("../uncurried/drop");
/**
 * @example
 * drop(2)([1, 2, 3, 4, 5]) // (3, 4, 5)
 * drop(3)('foobar') // ('b', 'a', 'r')
 */
exports.drop = (amount) => (it) => drop_1.drop(it, amount);
//# sourceMappingURL=drop.js.map