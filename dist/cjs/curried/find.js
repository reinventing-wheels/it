"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const find_1 = require("../uncurried/find");
/**
 * @example
 * find(n => n%2 == 0)([1, 2, 3]) // 2
 * find(n => n%2 != 0)([1, 2, 3]) // 1
 * find(c => c != 'f')('foobar') // 'o'
 */
exports.find = (fn) => (it) => find_1.find(it, fn);
//# sourceMappingURL=find.js.map