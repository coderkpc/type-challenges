type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
}

// 数组本质上是一个key为数字的对象
// 所以元组的类型其实可以用T[number]取
// 取到的是一个联合类型
// 然后用 in 遍历
// 由于元祖的特性 key: key即可变成对象
