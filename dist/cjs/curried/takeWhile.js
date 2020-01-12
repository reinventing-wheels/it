"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const takeWhile_1 = require("../uncurried/takeWhile");
/**
 * @example
 * takeWhile(n => n < 4)([1, 2, 3, 4, 5]) // (1 2 3)
 * takeWhile(c => c != 'b')('foobar') // (f o o)
 */
exports.takeWhile = (fn) => (it) => takeWhile_1.takeWhile(it, fn);
//# sourceMappingURL=takeWhile.js.map