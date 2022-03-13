type Unshift<T, U> = T extends [...infer Rest] ? [U, ...Rest] : never
