import { lock } from '../util';
/**
 * @example
 * first([1, 2, 3]) // 1
 * first('foobar') // 'f'
 */
export function first(it) {
    for (const value of lock(it))
        return value;
}
