## JavaScript iterables become handy!

Due to a lack of [JavaScript iterables][1] built-in functionality this minimalistic library was created.
It provides a bunch of essentials (`filter`, `map`, `reduce`, etc.) to perform operations on iterables
and derive iterables from other iterables.

### Features

- Curried and uncurried generator-based single-purpose functions
- A handy chainable wrapper interface which is an iterable as well

## Installation

```sh
yarn add reinventing-wheels/it
```

## Usage

**Tip:** use [VSCode][2] or any other editor with [TypeScript][3] declarations support for the best experience

### Single-purpose functions

#### Curried

```js
import { range, filter, reduce } from 'it'
import { curried } from 'it' // all of them

const countTo99 = range(1)(100)
const odds = filter(n => n%2 !== 0)
const sum = reduce((acc, n) => acc + n)(0)
const sumOfOddNumsBelow100 = sum(odds(countTo99()))
```

#### Uncurried

```js
import { rangeʹ, filterʹ, reduceʹ } from 'it'
import { uncurried } from 'it' // all of them

const nums = rangeʹ(1, 100)
const oddNums = filterʹ(nums, n => n%2 !== 0)
const sumOfOddNums = reduceʹ(oddNums, (acc, n) => acc + n, 0)
```

### Chainable wrapper

#### First 10 odd Fibonacci numbers

```js
import { it } from 'it'

function* fibonacciSequence() {
  for (let [n, m] = [0, 1];; [n, m] = [m, m + n])
    yield n
}

const firstTenOddFibonacciNumbers = () =>
  it(fibonacciSequence())
    .filter(n => n%2 !== 0)
    .take(10)

console.log(...firstTenOddFibonacciNumbers())
```

#### A sequence in which each element is a hash of the previous element

```js
import { It } from 'it'
import { createHash } from 'crypto'

const hash = input =>
  createHash('sha1')
    .update(input)
    .digest('hex')

const hashSequence = seed =>
  It.sequence(hash, seed)
    .drop(1) // get rid of seed

console.log([...hashSequence('foo').take(10)])
```

#### Pincodes and passwords from one source of random numbers

```js
import { It } from 'it'

const numbers = It.generate(Math.random)
const digits = numbers.map(n => Math.floor(n*10))
const bytes = numbers.map(n => Math.floor(n*0x100))

const pincode = size =>
  digits
    .take(size)
    .reduce((str, d) => str + d, '')

const password = size =>
  bytes
    .filter(b => (
      0x2f < b && b < 0x3a || // 0-9
      0x40 < b && b < 0x5b || // A-Z
      0x60 < b && b < 0x7b    // a-z
    ))
    .take(size)
    .cast(it => String.fromCharCode(...it))

console.log(pincode(4), password(10))
```

### More

- [src/functions/curried.spec.ts](src/functions/curried.spec.ts)
- [src/it.spec.ts](src/it.spec.ts)
- [src/it.ts](src/it.ts)

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[2]: https://code.visualstudio.com/
[3]: https://www.typescriptlang.org/
