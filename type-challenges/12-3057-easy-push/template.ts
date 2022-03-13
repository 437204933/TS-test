type Push<T, U> = T extends [...infer Rest] ? [...Rest, U] : never
