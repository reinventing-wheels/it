"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * cast([1, 2, 3], it => new Uint8Array(it)) // Uint8Array
 * cast([1, 2, 3], it => new Set(it)) // Set<number>
 * cast('foobar', it => new Set(it)) // Set<string>
 */
function cast(it, fn) {
    return fn(it);
}
exports.cast = cast;
//# sourceMappingURL=cast.js.map