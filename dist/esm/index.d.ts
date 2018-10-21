import { forEach, reduce, filter, map, concat, take, drop } from './functions/uncurried';
import { repeat, always, loop, generate, sequence, range, match } from './functions/uncurried';
import * as uncurried from './functions/uncurried';
import * as curried from './functions/curried';
export { forEach as forEachʹ, reduce as reduceʹ, filter as filterʹ, map as mapʹ, concat as concatʹ, repeat as repeatʹ, always as alwaysʹ, loop as loopʹ, generate as generateʹ, sequence as sequenceʹ, range as rangeʹ, match as matchʹ, take as takeʹ, drop as dropʹ };
export { uncurried, curried };
export * from './functions/curried';
export * from './it';
