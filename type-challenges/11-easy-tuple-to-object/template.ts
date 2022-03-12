type Key = Object

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

const tuple = ['tuple', 't1', 't2', 't3', 't4', 't5'] as const

type tupleKey = typeof tuple

// 遍及Array T[number]
