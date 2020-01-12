**Iterable Tools** is a library which provides higher-order functions (such as `filter`, `map`, `reduce`, etc.) for [JavaScript iterables][1] due to a lack of such functionality in the language. There's also a handy wrapper class with all the functions available as chainable methods, so you can work with iterables in similar to arrays fashion.

## Installation

> **Tip:** see [Git URLs as Dependencies][7] for more info

```sh
npm install reinventing-wheels/it
```

## Usage

> **Tip:** use [VSCode][2] or any other editor with [TypeScript][3] declarations support for the best experience

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
import { it } from 'it'

const zeros = () =>
  it.range(0x61, 0x7b) // a-z
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
import { it } from 'it'
import { createHash } from 'crypto'

const hash = input =>
  createHash('sha1')
    .update(input)
    .digest('hex')

const hashSequence = seed =>
  it.sequence(hash, seed)
    .drop(1) // drop `seed`

console.log([...hashSequence('foo').take(10)])
```

#### Pincodes and passwords from one source of random numbers

```js
import { it } from 'it'

const randomNumbers = it.generate(Math.random)
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

const xorshift = (n = 0xdeadf00d) => () =>
  (n ^= n<<13, n ^= n>>>17, n ^= n<<5, n>>>0)

const randomBytes = seed =>
  it.generate(xorshift(seed))
    .flatMap(n => [n>>24, n>>16, n>>8, n])
    .map(n => 0xff & n)

const randomFloats = seed =>
  randomBytes(seed)
    .chunk(3)
    .map(([u8, ...u16]) => Buffer.of(0x3f, 0x80 | u8, ...u16))
    .map(buffer => buffer.readFloatBE(0) - 1.0)

const randomDoubles = seed =>
  randomBytes(seed)
    .chunk(7)
    .map(([u8, ...u48]) => Buffer.of(0x3f, 0xf0 | u8, ...u48))
    .map(buffer => buffer.readDoubleBE(0) - 1.0)

console.log(...randomBytes().take(16))
console.log(...randomFloats().take(4))
console.log(...randomDoubles().take(4))
```

#### [Caesar cipher][6]

```js
import { it } from 'it'

const cipherer = key => c =>
  0x41 <= c && c <= 0x5a ? 0x41 + (c + key - 0x41)%26 : // A-Z
  0x61 <= c && c <= 0x7a ? 0x61 + (c + key - 0x61)%26 : // a-z
  c

const cipher = (input, key) =>
  it(input)
    .map(char => char.charCodeAt(0))
    .map(cipherer(26 + key%26)) // ensure `key` is ≥ 0
    .cast(codes => String.fromCharCode(...codes))

const message = 'send nudes'
const ciphered = cipher(message, 5)
const deciphered = cipher(ciphered, -5)

console.log(`${message} -> ${ciphered} -> ${deciphered}`)
```

#### Radix conversion

```js
import { it } from 'it'

const digits =
  String
    .fromCharCode(...it.range(0x20, 0x80))
    .replace(/[^\p{Nd}\p{LC}]/ug, '')

const toNumber = (str, radix) =>
  it(radix <= 36 ? str.toUpperCase() : str)
    .map(digit => digits.indexOf(digit))
    .reduce((acc, n) => radix*acc + BigInt(n), BigInt(0))

const toString = (num, radix) =>
  it.sequence(n => n/radix, num)
    .takeWhile(n => n)
    .reduce((acc, n) => digits[n%radix] + acc, '')

const convert = (str, fromRadix, toRadix) =>
  toString(toNumber(str, BigInt(fromRadix)), BigInt(toRadix))

console.log(convert('42', 10, 2))
console.log(convert('deadf00d', 16, 10))
console.log(convert('SomeReallyLongNumberInBase62', 62, 10))
```

### More

- [src/it.ts](src/it.ts)
- [src/index.spec.ts](src/index.spec.ts)
- [src/uncurried](src/uncurried)
- [src/curried](src/curried)

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[2]: https://code.visualstudio.com/
[3]: https://www.typescriptlang.org/
[4]: http://experilous.com/1/blog/post/perfect-fast-random-floating-point-numbers#half-open-range
[5]: https://en.wikipedia.org/wiki/Xorshift
[6]: https://en.wikipedia.org/wiki/Caesar_cipher
[7]: https://docs.npmjs.com/files/package.json#git-urls-as-dependencies
