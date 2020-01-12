"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * enumerate(['foo', 'bar']) // ([0 foo] [1 bar])
 * enumerate('foo') // ([0 f] [1 o] [2 o])
 */
function* enumerate(it) {
    let i = 0;
    for (const value of it)
        yield [i++, value];
}
exports.enumerate = enumerate;
//# sourceMappingURL=enumerate.js.map