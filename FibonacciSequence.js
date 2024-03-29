// 用文字来说，就是斐波那契数列由0和1开始，
// 之后的斐波那契系数就是由之前的两数相加而得出。
// 首几个斐波那契系数是：
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
// 特别指出：0不是第一项，而是第零项。

// const f = n =>
//   n === 0 ? 0
//     :n === 1 ? 1
//       : f(n - 1) + f(n - 2)

// 使用记忆化
// const f = n =>
//   n === 0 ? 0
//     :n === 1 ? 1
//       : mf(n - 1) + mf(n - 2)
//
// mermorize = fn => {
//   cache = {}
//   return (first, ...args) => {
//     if (!(first in cache)) {
//       cache[first] = fn(first, ...args)
//     }
//     return cache[first]
//   }
// }
//
// mf = mermorize(f)

// 上面的代码可以进一步简写为:
mermorize = fn => {
    cache = {}
    return (first, ...args) => {
      if (!(first in cache)) {
        cache[first] = fn(first, ...args)
      }
      return cache[first]
    }
}

const f = mermorize(
  n =>
    n === 0 ? 0
      :n === 1 ? 1
        : f(n - 1) + f(n - 2)
)

console.log(`${f(0)},${f(1)},${f(2)},${f(3)},${f(4)},${f(5)},${f(6)},`)

const begin1 = new Date();
console.log(`f(44): ${f(44)}`)
console.log("斐波那契 44 耗费: " + (new Date() - begin1) + "ms")

const begin2 = new Date();
console.log(`f(45): ${f(45)}`)
console.log("斐波那契 45 耗费: " + (new Date() - begin2) + "ms")

var begin3 = new Date();
console.log(`f(46): ${f(46)}`)
console.log("斐波那契 46 耗费: " + (new Date() - begin3) + "ms")

var begin4 = new Date();
console.log(`f(47): ${f(47)}`)
console.log("斐波那契 47 耗费: " + (new Date() - begin4) + "ms")

var begin5 = new Date();
console.log(`f(100): ${f(100)}`)
console.log("斐波那契 100 耗费: " + (new Date() - begin5) + "ms")
// 输出
// 0,1,1,2,3,5,8,
// f(44): 701408733
// 斐波那契 44 耗费: 8841ms
// f(45): 1134903170
// 斐波那契 45 耗费: 14303ms
// f(46): 1836311903
// 斐波那契 46 耗费: 23160ms
// f(47): 2971215073
// 斐波那契 47 耗费: 37397ms
