"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uc = require("./uncurried");
/** Calls a function for each value of an iterable. */
exports.forEach = (fn) => (it) => uc.forEach(it, fn);
/** Reduces an iterable to a single value. */
exports.reduce = (fn) => (first) => (it) => uc.reduce(it, fn, first);
/** Filters values of an iterable. */
exports.filter = (fn) => (it) => uc.filter(it, fn);
/** Maps values of an iterable. */
exports.map = (fn) => (it) => uc.map(it, fn);
/** Yields a sequence of values derived from previous values. */
exports.sequence = (fn) => (first) => uc.sequence(fn, first);
/** Yields a sequence of monotonically increasing numbers. */
exports.range = (start) => (stop) => (step) => uc.range(start, stop, step);
/** Yields a sequence of matches. */
exports.match = (regexp) => (input) => uc.match(input, regexp);
/** Takes some amount of values from an iterable. */
exports.take = (amount) => (it) => uc.take(it, amount);
/** Drops some amount of values from an iterable. */
exports.drop = (amount) => (it) => uc.drop(it, amount);
var uncurried_1 = require("./uncurried");
exports.concat = uncurried_1.concat;
exports.cycle = uncurried_1.cycle;
exports.repeat = uncurried_1.repeat;
exports.loop = uncurried_1.loop;
exports.generate = uncurried_1.generate;
exports.zip = uncurried_1.zip;
