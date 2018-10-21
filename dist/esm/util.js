export const unwrap = (it) => it[Symbol.iterator]();
export const wrap = (it) => ({ [Symbol.iterator]: () => it });
export const next = (next) => wrap({ next });
