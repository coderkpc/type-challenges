type First<T extends any[]> = T extends [] ? never : T[0]
// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
// 首先T要接收的是数组 所以继承any[]
// 传入以后判断一下是不是空数组
// 是的话返回never
// 不是空数组就取第一项
