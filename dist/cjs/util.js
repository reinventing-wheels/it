"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrap = (it) => it[Symbol.iterator]();
exports.wrap = (it) => ({ [Symbol.iterator]: () => it });
exports.next = (next) => exports.wrap({ next });
