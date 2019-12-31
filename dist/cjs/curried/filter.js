"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("../uncurried/filter");
/**
 * @example
 * filter(n => n%2 == 0)([1, 2, 3, 4, 5]) // (2, 4)
 * filter(n => n%2 != 0)([1, 2, 3, 4, 5]) // (1, 3, 5)
 * filter(c => c != 'o')('foobar') // ('f', 'b', 'a', 'r')
 */
exports.filter = (fn) => (it) => filter_1.filter(it, fn);
//# sourceMappingURL=filter.js.map