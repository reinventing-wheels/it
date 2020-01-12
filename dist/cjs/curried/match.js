"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("../uncurried/match");
/**
 * @example
 * // ([foo f oo] [bar b ar] [baz b az])
 * match(/(f|b)(..)/g)('foobarbaz')
 */
exports.match = (regexp) => (input) => match_1.match(input, regexp);
//# sourceMappingURL=match.js.map