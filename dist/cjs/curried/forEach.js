"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forEach_1 = require("../uncurried/forEach");
/**
 * @example
 * forEach(n => log(n))([1, 2, 3, 4, 5])
 * forEach((c, i) => log(i, c))('foobar')
 */
exports.forEach = (fn) => (it) => forEach_1.forEach(it, fn);
