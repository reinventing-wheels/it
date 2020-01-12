"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * find([1, 2, 3], n => n%2 == 0) // 2
 * find([1, 2, 3], n => n%2 != 0) // 1
 * find('foobar', c => c != 'f') // o
 */
function find(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            return value;
}
exports.find = find;
//# sourceMappingURL=find.js.map