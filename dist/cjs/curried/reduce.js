"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = require("../uncurried/reduce");
/**
 * @example
 * reduce((acc, n) => acc + n)(0)([1, 2, 3]) // 6
 * reduce((acc, n) => acc + n)('')([1, 2, 3]) // '123'
 * reduce((map, c, i) => map.set(i, c))(new Map)('foo') // Map
 */
exports.reduce = (fn) => (first) => (it) => reduce_1.reduce(it, fn, first);
