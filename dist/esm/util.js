export const done = () => ({ done: true });
export const value = (value) => ({ value });
export const wrap = (it) => ({ [Symbol.iterator]: () => it });
export const unwrap = (it) => it[Symbol.iterator]();
export const lock = (it) => {
    const itʹ = unwrap(it);
    return wrap({ next: itʹ.next.bind(itʹ) });
};
export const staticMethods = (ctor) => {
    const props = Object.getOwnPropertyNames(ctor);
    const acc = {};
    for (const prop of props)
        if (typeof ctor[prop] === 'function')
            acc[prop] = ctor[prop];
    return acc;
};
