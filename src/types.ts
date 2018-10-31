export type Callback<T, U> = (value: T, index: number) => U
export type Reducer<T, U> = (previous: U, current: T, index: number) => U
export type Flatten<T> = T extends Iterable<infer T> ? T : never
