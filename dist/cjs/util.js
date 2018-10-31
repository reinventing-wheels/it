"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Extracts an iterator from an iterable. */
exports.unwrap = (it) => it[Symbol.iterator]();
/** Creates an iterable from an iterator. */
exports.wrap = (it) => ({ [Symbol.iterator]: () => it });
/** Creates an iterable from a function. */
exports.iter = (next) => exports.wrap({ next });
/** Creates an iterator result with `done` set to true. */
exports.done = () => ({ done: true });
/** Creates an iterator result with specified `value`. */
exports.value = (value) => ({ value });
