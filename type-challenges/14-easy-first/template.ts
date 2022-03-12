type First1<T extends any[]> = T['length'] extends 0 ? never : T[0]

type First2<T extends any[]> = T extends [] ? never : T[0]

type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

type Tail<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest : never

type f = First<[() => 123, { a: string }]>
