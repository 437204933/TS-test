type AddOne<TArray extends unknown[], T = unknown> = [...TArray, T]

type Flat<
  TArray extends unknown[],
  TResult extends unknown[] = [],
> = TArray extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? Flat<Rest, [...TResult, ...First]>
    : Flat<Rest, [...TResult, First]>
  : TResult

type FlattenDepth<
  TArray extends unknown[],
  MAX extends number = 1,
  TLevel extends unknown[] = [],
  LimitTimes extends number = 100,
> =
TLevel['length'] extends MAX
  ? TArray
  : TLevel['length'] extends LimitTimes
    ? TArray
    : FlattenDepth<Flat<TArray>, MAX, AddOne<TLevel>>

export default FlattenDepth
