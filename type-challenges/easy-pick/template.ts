type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}

// 1.返回对象 =>>>>>>>> {}
// 2.遍及foreach =>>>>>>>> in
// 3. todo[key] 取值 =>>>>>>>> T[P]
// 4. 看key在不在todo里 =>>>>>>>> K extends keyof T
