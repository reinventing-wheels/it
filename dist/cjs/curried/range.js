"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = require("../uncurried/range");
/**
 * @example
 * range()()() // (0, 1, 2, 3, 4, …)
 * range(0)(5)() // (0, 1, 2, 3, 4)
 * range(1)(10)(2) // (1, 3, 5, 7, 9)
 */
exports.range = (start) => (stop) => (step) => range_1.range(start, stop, step);
