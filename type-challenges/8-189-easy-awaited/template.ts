type MyAwaited<T extends Promise<any>> = T extends Promise<infer Res> ? Res extends Promise<any> ? MyAwaited<Res> : Res : never

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type PromiseX = MyAwaited<Z>

// 使用 Promise<infer P>获取  P 类型 进行判断
