"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * // ([foo f oo] [bar b ar] [baz b az])
 * match('foobarbaz', /(f|b)(..)/g)
 */
function* match(input, regexp) {
    // eslint-disable-next-line no-cond-assign
    for (let match; match = regexp.exec(input);)
        yield match;
}
exports.match = match;
//# sourceMappingURL=match.js.map