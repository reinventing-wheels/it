"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * chain([1, 2], [3, 4], [5]) // (1 2 3 4 5)
 * chain('foo', 'bar') // (f o o b a r)
 */
function* chain(...its) {
    for (const it of its)
        yield* it;
}
exports.chain = chain;
//# sourceMappingURL=chain.js.map