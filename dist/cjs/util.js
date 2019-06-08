"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.done = () => ({ done: true });
exports.value = (value) => ({ value });
exports.wrap = (it) => ({ [Symbol.iterator]: () => it });
exports.unwrap = (it) => it[Symbol.iterator]();
exports.lock = (it) => {
    const itʹ = exports.unwrap(it);
    return exports.wrap({ next: itʹ.next.bind(itʹ) });
};
exports.staticMethods = (ctor) => {
    const props = Object.getOwnPropertyNames(ctor);
    const acc = {};
    for (const prop of props)
        if (typeof ctor[prop] === 'function')
            acc[prop] = ctor[prop];
    return acc;
};
