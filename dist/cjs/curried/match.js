"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("../uncurried/match");
/**
 * @example
 * // (['foo', 'f', 'oo', index: 0, input: 'foobarbaz'],
 * //  ['bar', 'b', 'ar', index: 3, input: 'foobarbaz'],
 * //  ['baz', 'b', 'az', index: 6, input: 'foobarbaz'])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
exports.match = (regexp) => (input) => match_1.match(input, regexp);
