"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const uncurried_1 = require("./functions/uncurried");
exports.forEachʹ = uncurried_1.forEach;
exports.reduceʹ = uncurried_1.reduce;
exports.filterʹ = uncurried_1.filter;
exports.mapʹ = uncurried_1.map;
exports.concatʹ = uncurried_1.concat;
exports.takeʹ = uncurried_1.take;
exports.dropʹ = uncurried_1.drop;
const uncurried_2 = require("./functions/uncurried");
exports.repeatʹ = uncurried_2.repeat;
exports.alwaysʹ = uncurried_2.always;
exports.loopʹ = uncurried_2.loop;
exports.generateʹ = uncurried_2.generate;
exports.sequenceʹ = uncurried_2.sequence;
exports.rangeʹ = uncurried_2.range;
exports.matchʹ = uncurried_2.match;
const uncurried = require("./functions/uncurried");
exports.uncurried = uncurried;
const curried = require("./functions/curried");
exports.curried = curried;
__export(require("./functions/curried"));
__export(require("./it"));
