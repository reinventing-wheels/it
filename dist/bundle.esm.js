function cast(it, fn) {
    return fn(it);
}

function* chain(...its) {
    for (const it of its)
        yield* it;
}

function* chunk(it, size) {
    const chunk = [];
    for (const value of it)
        if (chunk.push(value) >= size)
            yield chunk.splice(0);
    if (chunk.length)
        yield chunk;
}

function* count(start = 0, step = 1) {
    for (let n = start;; n += step)
        yield n;
}

function collect(it) {
    return [...it];
}

function* cycle(it, times = Infinity) {
    for (let i = 0; i < times; i++)
        yield* it;
}

const wrap = (it) => ({ [Symbol.iterator]: () => it });
const unwrap = (it) => it[Symbol.iterator]();
const lock = (it) => {
    const itʹ = unwrap(it);
    return wrap({ next: itʹ.next.bind(itʹ) });
};
const staticMethods = (ctor) => {
    const props = Object.getOwnPropertyNames(ctor);
    const acc = {};
    for (const prop of props)
        if (typeof ctor[prop] === 'function')
            acc[prop] = ctor[prop];
    return acc;
};

function* drop(it, amount = 1) {
    const itʹ = lock(it);
    let i = 0;
    for (const value of itʹ) {
        if (i++ >= amount) {
            yield value;
            yield* itʹ;
        }
    }
}

function* dropWhile(it, fn) {
    const itʹ = lock(it);
    let i = 0;
    for (const value of itʹ) {
        if (!fn(value, i++)) {
            yield value;
            yield* itʹ;
        }
    }
}

function* enumerate(it) {
    let i = 0;
    for (const value of it)
        yield [i++, value];
}

function every(it, fn) {
    let i = 0;
    for (const value of it)
        if (!fn(value, i++))
            return false;
    return true;
}

function* filter(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            yield value;
}

function find(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            return value;
}

function first(it) {
    for (const value of lock(it))
        return value;
}

function* flatMap(it, fn) {
    let i = 0;
    for (const value of it)
        yield* fn(value, i++);
}

function* flatten(it) {
    for (const value of it)
        yield* value;
}

function forEach(it, fn) {
    let i = 0;
    for (const value of it)
        fn(value, i++);
}

function* generate(fn, times = Infinity) {
    for (let i = 0; i < times; i++)
        yield fn(i);
}

function* inspect(it, fn) {
    let i = 0;
    for (const value of it) {
        fn(value, i++);
        yield value;
    }
}

function last(it) {
    let value;
    for (value of it)
        ;
    return value;
}

function length(it) {
    let i = 0;
    for (const _ of it)
        i++;
    return i;
}

function* loop(fn, times = Infinity) {
    for (let i = 0; i < times; i++)
        yield* fn(i);
}

function* map(it, fn) {
    let i = 0;
    for (const value of it)
        yield fn(value, i++);
}

function* match(input, regexp) {
    for (let match; match = regexp.exec(input);)
        yield match;
}

function nth(it, n) {
    let i = 0;
    for (const value of it)
        if (i++ >= n)
            return value;
}

function* range(start = 0, stop = Infinity, step = 1) {
    for (let n = start; n < stop; n += step)
        yield n;
}

function reduce(it, fn, first) {
    let i = 0, acc = first;
    for (const value of it)
        acc = fn(acc, value, i++);
    return acc;
}

function* repeat(value, times = Infinity) {
    for (let i = 0; i < times; i++)
        yield value;
}

function* sequence(fn, first, length = Infinity) {
    for (let i = 0, value = first; i < length; value = fn(value, i++))
        yield value;
}

function some(it, fn) {
    let i = 0;
    for (const value of it)
        if (fn(value, i++))
            return true;
    return false;
}

function* take(it, amount = 1) {
    let i = 0;
    for (const value of amount > 0 ? lock(it) : []) {
        yield value;
        if (++i >= amount)
            return;
    }
}

function* takeWhile(it, fn) {
    let i = 0;
    for (const value of it) {
        if (!fn(value, i++))
            return;
        yield value;
    }
}

function* unique(it) {
    const set = new Set();
    for (const value of it) {
        if (!set.has(value)) {
            set.add(value);
            yield value;
        }
    }
}

function* zip(...its) {
    for (const itsʹ = its.map(unwrap);;) {
        const values = [];
        for (const it of itsʹ) {
            const { done, value } = it.next();
            if (done)
                return;
            values.push(value);
        }
        yield values;
    }
}



const uc = ({
    __proto__: null,
    cast: cast,
    chain: chain,
    chunk: chunk,
    count: count,
    collect: collect,
    cycle: cycle,
    drop: drop,
    dropWhile: dropWhile,
    enumerate: enumerate,
    every: every,
    filter: filter,
    find: find,
    first: first,
    flatMap: flatMap,
    flatten: flatten,
    forEach: forEach,
    generate: generate,
    inspect: inspect,
    last: last,
    length: length,
    loop: loop,
    map: map,
    match: match,
    nth: nth,
    range: range,
    reduce: reduce,
    repeat: repeat,
    sequence: sequence,
    some: some,
    take: take,
    takeWhile: takeWhile,
    unique: unique,
    zip: zip
});

const cast$1 = (fn) => (it) => cast(it, fn);

const chunk$1 = (size) => (it) => chunk(it, size);

const count$1 = (start) => (step) => count(start, step);

const cycle$1 = (times) => (it) => cycle(it, times);

const drop$1 = (amount) => (it) => drop(it, amount);

const dropWhile$1 = (fn) => (it) => dropWhile(it, fn);

const every$1 = (fn) => (it) => every(it, fn);

const filter$1 = (fn) => (it) => filter(it, fn);

const find$1 = (fn) => (it) => find(it, fn);

const flatMap$1 = (fn) => (it) => flatMap(it, fn);

const forEach$1 = (fn) => (it) => forEach(it, fn);

const generate$1 = (times) => (fn) => generate(fn, times);

const inspect$1 = (fn) => (it) => inspect(it, fn);

const loop$1 = (times) => (fn) => loop(fn, times);

const map$1 = (fn) => (it) => map(it, fn);

const match$1 = (regexp) => (input) => match(input, regexp);

const nth$1 = (n) => (it) => nth(it, n);

const range$1 = (start) => (stop) => (step) => range(start, stop, step);

const reduce$1 = (fn) => (first) => (it) => reduce(it, fn, first);

const repeat$1 = (times) => (value) => repeat(value, times);

const sequence$1 = (length) => (fn) => (first) => sequence(fn, first, length);

const some$1 = (fn) => (it) => some(it, fn);

const take$1 = (amount) => (it) => take(it, amount);

const takeWhile$1 = (fn) => (it) => takeWhile(it, fn);



const c = ({
    __proto__: null,
    chain: chain,
    collect: collect,
    enumerate: enumerate,
    first: first,
    flatten: flatten,
    last: last,
    length: length,
    unique: unique,
    zip: zip,
    cast: cast$1,
    chunk: chunk$1,
    count: count$1,
    cycle: cycle$1,
    drop: drop$1,
    dropWhile: dropWhile$1,
    every: every$1,
    filter: filter$1,
    find: find$1,
    flatMap: flatMap$1,
    forEach: forEach$1,
    generate: generate$1,
    inspect: inspect$1,
    loop: loop$1,
    map: map$1,
    match: match$1,
    nth: nth$1,
    range: range$1,
    reduce: reduce$1,
    repeat: repeat$1,
    sequence: sequence$1,
    some: some$1,
    take: take$1,
    takeWhile: takeWhile$1
});

class IT {
    constructor(it) {
        this[Symbol.iterator] = it[Symbol.iterator].bind(it);
    }
    static count(start, step) {
        return it(count(start, step));
    }
    static generate(fn, times) {
        return it(generate(fn, times));
    }
    static loop(fn, times) {
        return it(loop(fn, times));
    }
    static match(input, regexp) {
        return it(match(input, regexp));
    }
    static range(start, stop, step) {
        return it(range(start, stop, step));
    }
    static repeat(value, times) {
        return it(repeat(value, times));
    }
    static sequence(fn, first, length) {
        return it(sequence(fn, first, length));
    }
    cast(fn) {
        return cast(this, fn);
    }
    chunk(size) {
        return it(chunk(this, size));
    }
    chain(...its) {
        return it(chain(this, ...its));
    }
    collect() {
        return collect(this);
    }
    cycle(times) {
        return it(cycle(this, times));
    }
    drop(amount) {
        return it(drop(this, amount));
    }
    dropWhile(fn) {
        return it(dropWhile(this, fn));
    }
    enumerate() {
        return it(enumerate(this));
    }
    every(fn) {
        return every(this, fn);
    }
    filter(fn) {
        return it(filter(this, fn));
    }
    find(fn) {
        return find(this, fn);
    }
    first() {
        return first(this);
    }
    flatMap(fn) {
        return it(flatMap(this, fn));
    }
    flatten() {
        return it(flatten(this));
    }
    forEach(fn) {
        forEach(this, fn);
    }
    inspect(fn) {
        return it(inspect(this, fn));
    }
    last() {
        return last(this);
    }
    length() {
        return length(this);
    }
    map(fn) {
        return it(map(this, fn));
    }
    nth(n) {
        return nth(this, n);
    }
    reduce(fn, first) {
        return reduce(this, fn, first);
    }
    some(fn) {
        return some(this, fn);
    }
    take(amount) {
        return it(take(this, amount));
    }
    takeWhile(fn) {
        return it(takeWhile(this, fn));
    }
    unique() {
        return it(unique(this));
    }
    zip(itʹ) {
        return it(zip(this, itʹ));
    }
}
IT.uncurried = uc;
IT.curried = c;
const it = Object.assign((it) => new IT(it), staticMethods(IT));

export { IT, cast$1 as cast, cast as castʹ, chain, chain as chainʹ, chunk$1 as chunk, chunk as chunkʹ, collect, collect as collectʹ, count$1 as count, count as countʹ, c as curried, cycle$1 as cycle, cycle as cycleʹ, drop$1 as drop, dropWhile$1 as dropWhile, dropWhile as dropWhileʹ, drop as dropʹ, enumerate, enumerate as enumerateʹ, every$1 as every, every as everyʹ, filter$1 as filter, filter as filterʹ, find$1 as find, find as findʹ, first, first as firstʹ, flatMap$1 as flatMap, flatMap as flatMapʹ, flatten, flatten as flattenʹ, forEach$1 as forEach, forEach as forEachʹ, generate$1 as generate, generate as generateʹ, inspect$1 as inspect, inspect as inspectʹ, it, last, last as lastʹ, length, length as lengthʹ, loop$1 as loop, loop as loopʹ, map$1 as map, map as mapʹ, match$1 as match, match as matchʹ, nth$1 as nth, nth as nthʹ, range$1 as range, range as rangeʹ, reduce$1 as reduce, reduce as reduceʹ, repeat$1 as repeat, repeat as repeatʹ, sequence$1 as sequence, sequence as sequenceʹ, some$1 as some, some as someʹ, take$1 as take, takeWhile$1 as takeWhile, takeWhile as takeWhileʹ, take as takeʹ, uc as uncurried, unique, unique as uniqueʹ, zip, zip as zipʹ };
//# sourceMappingURL=bundle.esm.js.map
