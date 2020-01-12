"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * @example
 * first([1, 2, 3]) // 1
 * first('foobar') // f
 */
function first(it) {
    for (const value of util_1.lock(it))
        return value;
}
exports.first = first;
//# sourceMappingURL=first.js.map