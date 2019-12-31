"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * every([1, 2, 3], n => n > 0) // true
 * every([1, 2, 3], n => n > 1) // false
 */
function every(it, fn) {
    let i = 0;
    for (const value of it)
        if (!fn(value, i++))
            return false;
    return true;
}
exports.every = every;
//# sourceMappingURL=every.js.map