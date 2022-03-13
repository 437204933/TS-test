type MyExclude<T, U> = {
  [P in keyof T]: P extends U ? undefined : P
}

type E = MyExclude<'a' | 'b' | 'c', 'a'>
