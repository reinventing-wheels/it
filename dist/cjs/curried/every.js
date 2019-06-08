"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const every_1 = require("../uncurried/every");
/**
 * @example
 * every(n => n > 0)([1, 2, 3]) // true
 * every(n => n > 1)([1, 2, 3]) // false
 */
exports.every = (fn) => (it) => every_1.every(it, fn);
