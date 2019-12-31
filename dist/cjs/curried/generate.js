"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("../uncurried/generate");
/**
 * @example
 * generate(5)(Math.random) // 5 random numbers
 * generate(5)(i => i) // (0, 1, 2, 3, 4)
 * generate()(i => i) // (0, 1, 2, 3, 4, …)
 */
exports.generate = (times) => (fn) => generate_1.generate(fn, times);
//# sourceMappingURL=generate.js.map