"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cast_1 = require("../uncurried/cast");
/**
 * @example
 * cast(it => new Uint8Array(it))([1, 2, 3]) // Uint8Array
 * cast(it => new Set(it))([1, 2, 3]) // Set<number>
 * cast(it => new Set(it))('foobar') // Set<string>
 */
exports.cast = (fn) => (it) => cast_1.cast(it, fn);
