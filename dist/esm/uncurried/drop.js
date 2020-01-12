import { lock } from '../util';
/**
 * @example
 * drop([1, 2, 3, 4, 5], 2) // (3 4 5)
 * drop('foobar', 3) // (b a r)
 */
export function* drop(it, amount = 1) {
    const itʹ = lock(it);
    let i = 0;
    for (const value of itʹ) {
        if (i++ >= amount) {
            yield value;
            yield* itʹ;
        }
    }
}
//# sourceMappingURL=drop.js.map