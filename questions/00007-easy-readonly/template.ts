type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
// 1. 先用keyof将interface T变成一个联合类型
// 2. 然后用in操作符去取
// 3. 然后拿到key去T中取
// 4. 加上readonly关键字即可
