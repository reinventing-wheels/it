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

#### Occurrences of each letter in a string

```js
import { It, it } from 'it'

const zeros = () =>
  It.range(0x61, 0x7b) // a-z
    .map(code => String.fromCharCode(code))
    .map(letter => [letter, 0])
    .cast(entries => new Map(entries))

const countLetters = input =>
  it(input)
    .filter(char => /[a-z]/i.test(char))
    .map(letter => letter.toLowerCase())
    .reduce((map, letter) => map.set(letter, map.get(letter) + 1), zeros())

console.log(countLetters('Pack my box with five dozen liquor jugs!'))
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

const randomNumbers = It.generate(Math.random)
const randomDigits = randomNumbers.map(n => Math.floor(n*10))
const randomBytes = randomNumbers.map(n => Math.floor(n*0x100))

const randomPincode = size =>
  randomDigits
    .take(size)
    .reduce((pin, digit) => pin + digit, '')

const randomPassword = size =>
  randomBytes
    .filter(byte => (
      0x30 <= byte && byte <= 0x39 || // 0-9
      0x41 <= byte && byte <= 0x5a || // A-Z
      0x61 <= byte && byte <= 0x7a    // a-z
    ))
    .take(size)
    .cast(codes => String.fromCharCode(...codes))

console.log(randomPincode(4))
console.log(randomPassword(10))
```

#### Random bytes/[floats/doubles][4] using [xorshift][5]

```js
import { it } from 'it'

function* xorshift(seed) {
  for (let x = seed; x ^= x<<13, x ^= x>>>17, x ^= x<<5;) {
    yield 0xff & x >>> 24
    yield 0xff & x >>> 16
    yield 0xff & x >>>  8
    yield 0xff & x
  }
}

const randomBytes = seed =>
  it(xorshift(seed))

const randomFloats = seed =>
  randomBytes(seed)
    .chunk(4)
    .map(bytes => Buffer.from(bytes))
    .map(buffer => {
      const u32 = buffer.readUInt32BE(0)
      buffer.writeUInt32BE(0x3f800000 | u32>>>9, 0)
      return buffer.readFloatBE(0) - 1.0
    })

const randomDoubles = seed =>
  randomBytes(seed)
    .chunk(8)
    .map(bytes => Buffer.from(bytes))
    .map(buffer => {
      const u32 = buffer.readUInt32BE(0)
      buffer.writeUInt32BE(0x3ff00000 | u32>>>12, 0)
      return buffer.readDoubleBE(0) - 1.0
    })

console.log(...randomBytes(0xdeadf00d).take(16))
console.log(...randomFloats(0xbadc0de).take(4))
console.log(...randomDoubles(0xc0ffee).take(4))
```

#### [Caesar cipher][6]

```js
import { it } from 'it'

const isUpperCase = code => 0x41 <= code && code <= 0x5a
const isLowerCase = code => 0x61 <= code && code <= 0x7a

const cipherer = key => code =>
  isUpperCase(code) ? 0x41 + (code + key - 0x41)%26 :
  isLowerCase(code) ? 0x61 + (code + key - 0x61)%26 :
  code

const cipher = (input, key) =>
  it(input)
    .map(char => char.charCodeAt(0))
    .map(cipherer(26 + key%26)) // ensure key is ≥ 0
    .cast(codes => String.fromCharCode(...codes))

const message = 'send nudes'
const ciphered = cipher(message, 5)
const deciphered = cipher(ciphered, -5)

console.log(`${message} -> ${ciphered} -> ${deciphered}`)
```

### More

- [src/functions/curried.spec.ts](src/functions/curried.spec.ts)
- [src/it.spec.ts](src/it.spec.ts)
- [src/it.ts](src/it.ts)

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[2]: https://code.visualstudio.com/
[3]: https://www.typescriptlang.org/
[4]: http://experilous.com/1/blog/post/perfect-fast-random-floating-point-numbers#half-open-range
[5]: https://en.wikipedia.org/wiki/Xorshift
[6]: https://en.wikipedia.org/wiki/Caesar_cipher
