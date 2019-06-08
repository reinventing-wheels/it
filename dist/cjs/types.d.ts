export declare type Filter<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export declare type Methods<T> = {
    [K in Filter<T, Function>]: T[K];
};
export declare type Iterables<T> = {
    [K in keyof T]: Iterable<T[K]>;
};
export declare type Callback<T, U> = (value: T, index: number) => U;
export declare type Reducer<T, U> = (acc: U, value: T, index: number) => U;
export declare type Flatten<T> = T extends Iterable<infer T> ? T : never;
//# sourceMappingURL=types.d.ts.map