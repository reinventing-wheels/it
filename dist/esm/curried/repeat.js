import { repeat as repeatʹ } from '../uncurried/repeat';
/**
 * @example
 * repeat()(42) // (42 42 42 …)
 * repeat(5)(42) // (42 42 42 42 42)
 * repeat(3)('foo') // (foo foo foo)
 */
export const repeat = (times) => (value) => repeatʹ(value, times);
//# sourceMappingURL=repeat.js.map