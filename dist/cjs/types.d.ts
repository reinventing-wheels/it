export declare type Callback<T, U> = (value: T, index: number) => U;
export declare type Reducer<T, U> = (previous: U, current: T, index: number) => U;
export declare type Flatten<T> = T extends Iterable<infer T> ? T : never;
//# sourceMappingURL=types.d.ts.map