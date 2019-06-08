"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cycle_1 = require("../uncurried/cycle");
/**
 * @example
 * cycle(2)([1, 2, 3]) // (1, 2, 3, 1, 2, 3)
 * cycle()([1, 2, 3]) // (1, 2, 3, 1, 2, 3, …)
 * cycle()('foo') // ('f', 'o', 'o', 'f', 'o', …)
 */
exports.cycle = (times) => (it) => cycle_1.cycle(it, times);
