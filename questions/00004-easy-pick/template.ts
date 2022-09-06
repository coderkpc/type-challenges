// 1. K是要挑出来的类型/联合类型，原则上被挑出来的必须是T的Key，所以需要限制
// 2. T是目标类型，所以先用keyof取出所有的key作为联合类型
// 再用K去继承这个联合类型
// 然后用in遍历K 重新作为key
// 最后用T[key]去原来的interface中取类型
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}
