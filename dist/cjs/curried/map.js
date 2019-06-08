"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("../uncurried/map");
/**
 * @example
 * map(n => 2*n)([1, 2, 3, 4, 5]) // (2, 4, 6, 8, 10)
 * map(c => c.charCodeAt(0))('foo') // (102, 111, 111)
 */
exports.map = (fn) => (it) => map_1.map(it, fn);
