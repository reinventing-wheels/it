export type Filter<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T]
export type Methods<T> = { [K in Filter<T, Function>]: T[K] }

export type Iterables<T> = { [K in keyof T]: Iterable<T[K]> }
export type Callback<T, U> = (value: T, index: number) => U
export type Reducer<T, U> = (acc: U, value: T, index: number) => U
export type Flatten<T> = T extends Iterable<infer T> ? T : never
