"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatMap_1 = require("../uncurried/flatMap");
/**
 * @example
 * flatMap(n => [-n, +n])([1, 2, 3]) // (-1, 1, -2, 2, -3, 3)
 * flatMap(s => s)(['foo', 'bar']) // ('f', 'o', 'o', 'b', 'a', 'r')
 */
exports.flatMap = (fn) => (it) => flatMap_1.flatMap(it, fn);
//# sourceMappingURL=flatMap.js.map