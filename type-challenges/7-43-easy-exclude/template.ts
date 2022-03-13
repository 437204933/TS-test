type MyExclude<T, U> = T extends U ? never : T

type E = MyExclude<'a' | 'b' | 'c', 'a'>

type connection = 'a' | 'b' | 'c'

type key = keyof connection
