"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequence_1 = require("../uncurried/sequence");
/**
 * @example
 * sequence()(n => n+1)(1) // (1, 2, 3, 4, 5, …)
 * sequence(7)(n => n*2)(1) // (1, 2, 4, 8, 16, 32, 64)
 * sequence(5)(n => n**2)(2) // (2, 4, 16, 256, 65536)
 */
exports.sequence = (length) => (fn) => (first) => sequence_1.sequence(fn, first, length);
//# sourceMappingURL=sequence.js.map