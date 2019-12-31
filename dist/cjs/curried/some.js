"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const some_1 = require("../uncurried/some");
/**
 * @example
 * some(n => n < 2)([1, 2, 3]) // true
 * some(n => n < 1)([1, 2, 3]) // false
 */
exports.some = (fn) => (it) => some_1.some(it, fn);
//# sourceMappingURL=some.js.map