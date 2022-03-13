type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

// 字段前加入 readonly
