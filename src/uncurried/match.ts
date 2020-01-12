/**
 * @example
 * // ([foo f oo] [bar b ar] [baz b az])
 * match('foobarbaz', /(f|b)(..)/g)
 */
export function* match(input: string, regexp: RegExp) {
  // eslint-disable-next-line no-cond-assign
  for (let match; match = regexp.exec(input);)
    yield match
}
