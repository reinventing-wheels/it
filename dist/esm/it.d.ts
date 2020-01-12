import { Callback, Flatten, Reducer } from './types';
import * as uc from './uncurried';
import * as c from './curried';
export declare class IT<T> implements Iterable<T> {
    [Symbol.iterator]: () => Iterator<T>;
    static uncurried: typeof uc;
    static curried: typeof c;
    constructor(it: Iterable<T>);
    /**
     * @example
     * it.count() // (0 1 2 3 4 …)
     * it.count(5) // (5 6 7 8 9 …)
     * it.count(5, -1) // (5 4 3 2 1 …)
     * it.count(0, -2) // (0 -2 -4 -6 …)
     */
    static count(start?: number, step?: number): IT<number>;
    /**
     * @example
     * it.generate(Math.random, 5) // 5 random numbers
     * it.generate(i => i, 5) // (0 1 2 3 4)
     * it.generate(i => i) // (0 1 2 3 4 …)
     */
    static generate<T>(fn: (index: number) => T, times?: number): IT<T>;
    /**
     * @example
     * function* countTo3() { for (let i = 1; i <= 3; i++) yield i }
     * function* countTo(n) { for (let i = 1; i <= n; i++) yield i }
     * it.loop(countTo3) // (1 2 3 1 2 3 1 2 3 …)
     * it.loop(countTo3, 3) // (1 2 3 1 2 3 1 2 3)
     * it.loop(countTo, 4) // (1 1 2 1 2 3 1 2 3 4)
     */
    static loop<T>(fn: (index: number) => Iterable<T>, times?: number): IT<T>;
    /**
     * @example
     * // ([foo f oo] [bar b ar] [baz b az])
     * it.match('foobarbaz', /(f|b)(..)/g)
     */
    static match(input: string, regexp: RegExp): IT<RegExpExecArray>;
    /**
     * @example
     * it.range() // (0 1 2 3 4 …)
     * it.range(0, 5) // (0 1 2 3 4)
     * it.range(1, 10, 2) // (1 3 5 7 9)
     */
    static range(start?: number, stop?: number, step?: number): IT<number>;
    /**
     * @example
     * it.repeat(42) // (42 42 42 …)
     * it.repeat(42, 5) // (42 42 42 42 42)
     * it.repeat('foo', 3) // (foo foo foo)
     */
    static repeat<T>(value: T, times?: number): IT<T>;
    /**
     * @example
     * it.sequence(n => n+1, 1) // (1 2 3 4 5 …)
     * it.sequence(n => n*2, 1, 7) // (1 2 4 8 16 32 64)
     * it.sequence(n => n**2, 2, 5) // (2 4 16 256 65536)
     */
    static sequence<T>(fn: Callback<T, T>, first: T, length?: number): IT<T>;
    /**
     * @example
     * it([1, 2, 3]).cast(it => new Uint8Array(it)) // Uint8Array
     * it([1, 2, 3]).cast(it => new Set(it)) // Set<number>
     * it('foobar').cast(it => new Set(it)) // Set<string>
     */
    cast<U>(fn: (it: this) => U): U;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).chunk(2) // ([1 2] [3 4] [5])
     * it('foobar').chunk(3) // ([f o o] [b a r])
     */
    chunk(size: number): IT<T[]>;
    /**
     * @example
     * it([1, 2]).chain([3, 4], [5]) // (1 2 3 4 5)
     * it('foo').chain('bar') // (f o o b a r)
     */
    chain<U>(...its: Iterable<U>[]): IT<T | U>;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).collect() // [1 2 3 4 5]
     * it('foobar').collect() // [f o o b a r]
     */
    collect(): T[];
    /**
     * @example
     * it([1, 2, 3]).cycle(2) // (1 2 3 1 2 3)
     * it([1, 2, 3]).cycle() // (1 2 3 1 2 3 …)
     * it('foo').cycle() // (f o o f o …)
     */
    cycle(times?: number): IT<T>;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).drop(2) // (3 4 5)
     * it('foobar').drop(3) // (b a r)
     */
    drop(amount?: number): IT<T>;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).dropWhile(n => n < 3) // (3 4 5)
     * it('foobar').dropWhile(c => c != 'b') // (b a r)
     */
    dropWhile(fn: Callback<T, boolean>): IT<T>;
    /**
     * @example
     * it(['foo', 'bar']).enumerate() // ([0 foo] [1 bar])
     * it('foo').enumerate() // ([0 f] [1 o] [2 o])
     */
    enumerate(): IT<[number, T]>;
    /**
     * @example
     * it([1, 2, 3]).every(n => n > 0) // true
     * it([1, 2, 3]).every(n => n > 1) // false
     */
    every(fn: Callback<T, boolean>): boolean;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).filter(n => n%2 == 0) // (2 4)
     * it([1, 2, 3, 4, 5]).filter(n => n%2 != 0) // (1 3 5)
     * it('foobar').filter(c => c != 'o') // (f b a r)
     */
    filter(fn: Callback<T, boolean>): IT<T>;
    /**
     * @example
     * it([1, 2, 3]).find(n => n%2 == 0) // 2
     * it([1, 2, 3]).find(n => n%2 != 0) // 1
     * it('foobar').find(c => c != 'f') // o
     */
    find(fn: Callback<T, boolean>): T | undefined;
    /**
     * @example
     * it([1, 2, 3]).first() // 1
     * it('foobar').first() // f
     */
    first(): T | undefined;
    /**
     * @example
     * it([1, 2, 3]).flatMap(n => [-n, +n]) // (-1 1 -2 2 -3 3)
     * it(['foo', 'bar']).flatMap(s => s) // (f o o b a r)
     */
    flatMap<U>(fn: Callback<T, U[]>): IT<U>;
    /**
     * @example
     * it([[1, 2], [3, 4], [5]]).flatten() // (1 2 3 4 5)
     * it(['foo', 'bar']).flatten() // (f o o b a r)
     */
    flatten(): IT<Flatten<T>>;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).forEach(n => log(n))
     * it('foobar').forEach((c, i) => log(i, c))
     */
    forEach(fn: Callback<T, void>): void;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).inspect(n => log(n)) // (1 2 3 4 5)
     * it('foobar').inspect((c, i) => log(i, c)) // (f o …)
     */
    inspect(fn: Callback<T, void>): IT<T>;
    /**
     * @example
     * it([1, 2, 3]).last() // 3
     * it('foobar').last() // r
     */
    last(): T | undefined;
    /**
     * @example
     * it([1, 2, 3]).length() // 3
     * it('foobar').length() // 6
     */
    length(): number;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).map(n => 2*n) // (2 4 6 8 10)
     * it('foo').map(c => c.charCodeAt(0)) // (102 111 111)
     */
    map<U>(fn: Callback<T, U>): IT<U>;
    /**
     * @example
     * it([1, 2, 3]).nth(1) // 2
     * it('foobar').nth(0) // f
     * it('foobar').nth(3) // b
     */
    nth(n: number): T | undefined;
    /**
     * @example
     * it([1, 2, 3]).reduce((acc, n) => acc + n, 0) // 6
     * it([1, 2, 3]).reduce((acc, n) => acc + n, '') // 123
     * it('foo').reduce((map, c, i) => map.set(i, c), new Map) // Map
     */
    reduce<U>(fn: Reducer<T, U>, first: U): U;
    /**
     * @example
     * it([1, 2, 3]).some(n => n < 2) // true
     * it([1, 2, 3]).some(n => n < 1) // false
     */
    some(fn: Callback<T, boolean>): boolean;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).take(3) // (1 2 3)
     * it('foobar').take(3) // (f o o)
     */
    take(amount?: number): IT<T>;
    /**
     * @example
     * it([1, 2, 3, 4, 5]).takeWhile(n => n < 4) // (1 2 3)
     * it('foobar').takeWhile(c => c != 'b') // (f o o)
     */
    takeWhile(fn: Callback<T, boolean>): IT<T>;
    /**
     * @example
     * it('foobar').then(chars => new Set(chars)) // (f o b a r)
     * it('foobar').then(chars => [...chars].sort()) // (a b f o o r)
     * it('foobar').then(chars => [...chars].reverse()) // (r a b o o f)
     */
    then<U>(fn: (it: this) => Iterable<U>): IT<U>;
    /**
     * @example
     * it([1, 3, 3, 7]).unique() // (1 3 7)
     * it('foobar').unique() // (f o b a r)
     */
    unique(): IT<T>;
    /**
     * @example
     * it([1, 2, 3]).zip([4, 5, 6]) // ([1 4] [2 5] [3 6])
     * it([1, 2, 3]).zip('foobar') // ([1 f] [2 o] [3 o])
     */
    zip<U>(itʹ: Iterable<U>): IT<[T, U]>;
}
export declare const it: (<T>(it: Iterable<T>) => IT<T>) & import("./types").Methods<typeof IT>;
//# sourceMappingURL=it.d.ts.map