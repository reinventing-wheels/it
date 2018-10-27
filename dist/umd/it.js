(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.it = {})));
}(this, (function (exports) { 'use strict';

  const unwrap = (it) => it[Symbol.iterator]();
  const wrap = (it) => ({ [Symbol.iterator]: () => it });
  const next = (next) => wrap({ next });

  // tslint:disable:only-arrow-functions
  /** Calls a function for each value of an iterable. */
  function forEach(it, fn) {
      let i = 0;
      for (const value of it)
          fn(value, i++);
  }
  /** Reduces an iterable to a single value. */
  function reduce(it, fn, first) {
      let i = 0, acc = first;
      for (const value of it)
          acc = fn(acc, value, i++);
      return acc;
  }
  /** Filters values of an iterable. */
  function* filter(it, fn) {
      let i = 0;
      for (const value of it)
          if (fn(value, i++))
              yield value;
  }
  /** Maps values of an iterable. */
  function* map(it, fn) {
      let i = 0;
      for (const value of it)
          yield fn(value, i++);
  }
  /** Concatenates multiple iterables to a single one. */
  function* concat(...its) {
      for (const it of its)
          yield* it;
  }
  /** Yields values from an iterable in cycle. */
  function* cycle(it) {
      for (;;)
          yield* it;
  }
  /** Repeatedly yields the same value. */
  function* repeat(value) {
      for (;;)
          yield value;
  }
  /** Loops a generator function. */
  function* loop(fn) {
      for (let i = 0;;)
          yield* fn(i++);
  }
  /** Yields values generated by a function. */
  function* generate(fn) {
      for (let i = 0;;)
          yield fn(i++);
  }
  /** Yields a sequence of values derived from previous values. */
  function* sequence(fn, first) {
      for (let i = 0, value = first;; value = fn(value, i++))
          yield value;
  }
  /** Yields a sequence of monotonically increasing numbers. */
  function* range(start = 0, stop = Infinity, step = 1) {
      for (let number = start; number < stop; number += step)
          yield number;
  }
  /** Yields a sequence of matches. */
  function* match(input, regexp) {
      for (let match; match = regexp.exec(input);)
          yield match;
  }
  /** Zips multiple iterables to a single one. */
  function* zip(...its) {
      const itsʹ = its.map(unwrap);
      yield* next(() => {
          const results = itsʹ.map(it => it.next());
          const result = results.find(r => r.done) || { value: results.map(r => r.value) };
          return result;
      });
  }
  /** Takes some amount of values from an iterable. */
  function* take(it, amount) {
      let i = 0;
      const itʹ = unwrap(it);
      const done = { done: true };
      yield* next(() => i++ < amount ? itʹ.next() : done);
  }
  /** Drops some amount of values from an iterable. */
  function* drop(it, amount) {
      const itʹ = wrap(unwrap(it)); // always return the same iterator
      for (const _ of take(itʹ, amount))
          ; // noop
      yield* itʹ;
  }

  var uncurried = ({
    forEach: forEach,
    reduce: reduce,
    filter: filter,
    map: map,
    concat: concat,
    cycle: cycle,
    repeat: repeat,
    loop: loop,
    generate: generate,
    sequence: sequence,
    range: range,
    match: match,
    zip: zip,
    take: take,
    drop: drop
  });

  /** Calls a function for each value of an iterable. */
  const forEach$1 = (fn) => (it) => forEach(it, fn);
  /** Reduces an iterable to a single value. */
  const reduce$1 = (fn) => (first) => (it) => reduce(it, fn, first);
  /** Filters values of an iterable. */
  const filter$1 = (fn) => (it) => filter(it, fn);
  /** Maps values of an iterable. */
  const map$1 = (fn) => (it) => map(it, fn);
  /** Yields a sequence of values derived from previous values. */
  const sequence$1 = (fn) => (first) => sequence(fn, first);
  /** Yields a sequence of monotonically increasing numbers. */
  const range$1 = (start) => (stop) => (step) => range(start, stop, step);
  /** Yields a sequence of matches. */
  const match$1 = (regexp) => (input) => match(input, regexp);
  /** Takes some amount of values from an iterable. */
  const take$1 = (amount) => (it) => take(it, amount);
  /** Drops some amount of values from an iterable. */
  const drop$1 = (amount) => (it) => drop(it, amount);

  var curried = ({
    forEach: forEach$1,
    reduce: reduce$1,
    filter: filter$1,
    map: map$1,
    sequence: sequence$1,
    range: range$1,
    match: match$1,
    take: take$1,
    drop: drop$1,
    concat: concat,
    cycle: cycle,
    repeat: repeat,
    loop: loop,
    generate: generate,
    zip: zip
  });

  const it = (it) => new It(it);
  class It {
      constructor(it) {
          this[Symbol.iterator] = it[Symbol.iterator].bind(it);
      }
      /** Repeatedly yields the same value. */
      static repeat(value) {
          return new It(repeat(value));
      }
      /** Loops a generator function. */
      static loop(fn) {
          return new It(loop(fn));
      }
      /** Yields values generated by a function. */
      static generate(fn) {
          return new It(generate(fn));
      }
      /** Yields a sequence of values derived from previous values. */
      static sequence(fn, first) {
          return new It(sequence(fn, first));
      }
      /** Yields a sequence of monotonically increasing numbers. */
      static range(start, stop, step) {
          return new It(range(start, stop, step));
      }
      /** Yields a sequence of matches. */
      static match(input, regexp) {
          return new It(match(input, regexp));
      }
      /** Casts the iterable to other data structure. */
      cast(fn) {
          return fn(this);
      }
      /** Calls a function for each value of the iterable. */
      forEach(fn) {
          forEach(this, fn);
      }
      /** Reduces the iterable to a single value. */
      reduce(fn, first) {
          return reduce(this, fn, first);
      }
      /** Filters values of the iterable. */
      filter(fn) {
          return new It(filter(this, fn));
      }
      /** Maps values of the iterable. */
      map(fn) {
          return new It(map(this, fn));
      }
      /** Concatenates multiple iterables to a single one. */
      concat(...its) {
          return new It(concat(this, ...its));
      }
      /** Yields values from the iterable in cycle. */
      cycle() {
          return new It(cycle(this));
      }
      /** Zips multiple iterables to a single one. */
      zip(...its) {
          return new It(zip(this, ...its));
      }
      /** Takes some amount of values from the iterable. */
      take(amount) {
          return new It(take(this, amount));
      }
      /** Drops some amount of values from the iterable. */
      drop(amount) {
          return new It(drop(this, amount));
      }
  }
  It.uncurried = uncurried;
  It.curried = curried;

  exports.forEachʹ = forEach;
  exports.reduceʹ = reduce;
  exports.filterʹ = filter;
  exports.mapʹ = map;
  exports.concatʹ = concat;
  exports.cycleʹ = cycle;
  exports.repeatʹ = repeat;
  exports.loopʹ = loop;
  exports.generateʹ = generate;
  exports.sequenceʹ = sequence;
  exports.rangeʹ = range;
  exports.matchʹ = match;
  exports.takeʹ = take;
  exports.dropʹ = drop;
  exports.zipʹ = zip;
  exports.uncurried = uncurried;
  exports.curried = curried;
  exports.forEach = forEach$1;
  exports.reduce = reduce$1;
  exports.filter = filter$1;
  exports.map = map$1;
  exports.sequence = sequence$1;
  exports.range = range$1;
  exports.match = match$1;
  exports.take = take$1;
  exports.drop = drop$1;
  exports.concat = concat;
  exports.cycle = cycle;
  exports.repeat = repeat;
  exports.loop = loop;
  exports.generate = generate;
  exports.zip = zip;
  exports.it = it;
  exports.It = It;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=it.js.map
