"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * inspect([1, 2, 3, 4, 5], n => log(n)) // (1 2 3 4 5)
 * inspect('foobar', (c, i) => log(i, c)) // (f o …)
 */
function* inspect(it, fn) {
    let i = 0;
    for (const value of it) {
        fn(value, i++);
        yield value;
    }
}
exports.inspect = inspect;
//# sourceMappingURL=inspect.js.map