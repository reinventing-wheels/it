"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nth_1 = require("../uncurried/nth");
/**
 * @example
 * nth(1)([1, 2, 3]) // 2
 * nth(0)('foobar') // 'f'
 * nth(3)('foobar') // 'b'
 */
exports.nth = (n) => (it) => nth_1.nth(it, n);
//# sourceMappingURL=nth.js.map