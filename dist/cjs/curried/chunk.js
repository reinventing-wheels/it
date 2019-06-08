"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chunk_1 = require("../uncurried/chunk");
/**
 * @example
 * chunk(2)([1, 2, 3, 4, 5]) // ([1, 2], [3, 4], [5])
 * chunk(3)('foobar') // (['f', 'o', 'o'], ['b', 'a', 'r'])
 */
exports.chunk = (size) => (it) => chunk_1.chunk(it, size);
