"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repeat_1 = require("../uncurried/repeat");
/**
 * @example
 * repeat()(42) // (42 42 42 …)
 * repeat(5)(42) // (42 42 42 42 42)
 * repeat(3)('foo') // (foo foo foo)
 */
exports.repeat = (times) => (value) => repeat_1.repeat(value, times);
//# sourceMappingURL=repeat.js.map