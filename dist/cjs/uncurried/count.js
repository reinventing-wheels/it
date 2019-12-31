"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * count() // (0, 1, 2, 3, 4, …)
 * count(5) // (5, 6, 7, 8, 9, …)
 * count(5, -1) // (5, 4, 3, 2, 1, …)
 * count(0, -2) // (0, -2, -4, -6, …)
 */
function* count(start = 0, step = 1) {
    for (let n = start;; n += step)
        yield n;
}
exports.count = count;
//# sourceMappingURL=count.js.map