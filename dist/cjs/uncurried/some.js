"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * some([1, 2, 3], n => n < 2) // true
 * some([1, 2, 3], n => n < 1) // false
 */
function some(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            return true;
    return false;
}
exports.some = some;
//# sourceMappingURL=some.js.map