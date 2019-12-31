"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dropWhile_1 = require("../uncurried/dropWhile");
/**
 * @example
 * dropWhile(n => n < 3)([1, 2, 3, 4, 5]) // (3, 4, 5)
 * dropWhile(c => c != 'b')('foobar') // ('b', 'a', 'r')
 */
exports.dropWhile = (fn) => (it) => dropWhile_1.dropWhile(it, fn);
//# sourceMappingURL=dropWhile.js.map