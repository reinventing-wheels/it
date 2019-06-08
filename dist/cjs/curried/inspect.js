"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inspect_1 = require("../uncurried/inspect");
/**
 * @example
 * inspect(n => log(n))([1, 2, 3, 4, 5]) // (1, 2, 3, 4, 5)
 * inspect((c, i) => log(i, c))('foobar') // ('f', 'o', …)
 */
exports.inspect = (fn) => (it) => inspect_1.inspect(it, fn);
