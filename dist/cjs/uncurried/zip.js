"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * @example
 * zip([1, 2, 3], [4, 5, 6]) // ([1, 4], [2, 5], [3, 6])
 * zip([1, 2, 3], 'foobar') // ([1, 'f'], [2, 'o'], [3, 'o'])
 */
function* zip(...its) {
    for (const itsʹ = its.map(util_1.unwrap);;) {
        const values = [];
        for (const it of itsʹ) {
            const { done, value } = it.next();
            if (done)
                return;
            values.push(value);
        }
        yield values;
    }
}
exports.zip = zip;
