import { chunk as chunkʹ } from '../uncurried/chunk';
/**
 * @example
 * chunk(2)([1, 2, 3, 4, 5]) // ([1, 2], [3, 4], [5])
 * chunk(3)('foobar') // (['f', 'o', 'o'], ['b', 'a', 'r'])
 */
export const chunk = (size) => (it) => chunkʹ(it, size);
