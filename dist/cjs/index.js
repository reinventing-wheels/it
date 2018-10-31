"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const uncurried = require("./functions/uncurried");
exports.uncurried = uncurried;
const curried = require("./functions/curried");
exports.curried = curried;
var uncurried_1 = require("./functions/uncurried");
exports.chunkʹ = uncurried_1.chunk;
exports.concatʹ = uncurried_1.concat;
exports.cycleʹ = uncurried_1.cycle;
exports.dropʹ = uncurried_1.drop;
exports.filterʹ = uncurried_1.filter;
exports.flattenʹ = uncurried_1.flatten;
exports.forEachʹ = uncurried_1.forEach;
exports.generateʹ = uncurried_1.generate;
exports.loopʹ = uncurried_1.loop;
exports.mapʹ = uncurried_1.map;
exports.matchʹ = uncurried_1.match;
exports.rangeʹ = uncurried_1.range;
exports.reduceʹ = uncurried_1.reduce;
exports.repeatʹ = uncurried_1.repeat;
exports.sequenceʹ = uncurried_1.sequence;
exports.takeʹ = uncurried_1.take;
exports.zipʹ = uncurried_1.zip;
__export(require("./functions/curried"));
__export(require("./it"));
