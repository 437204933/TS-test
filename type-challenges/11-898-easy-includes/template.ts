import { Equal } from '@type-challenges/utils'

type e = Equal<1, 1>

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

type Includes2<T extends readonly any[], U> = {} extends {
  [K in keyof T as Equal<T[K], U> extends true ? K : never]: T[K]
} ? false : true
