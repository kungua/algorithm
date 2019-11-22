// 再优化一下
f = (n, result) =>
  n === 1 ? result
    : f(n - 1, n * result)


console.log('2 的阶乘是: ', f(2, 1))
console.log('4 的阶乘是: ', f(4, 1))
console.log('8 的阶乘是: ', f(8, 1))
console.log('16 的阶乘是: ', f(16, 1))
console.log('32 的阶乘是: ', f(32, 1))
console.log('64 的阶乘是: ', f(64, 1))
console.log('128 的阶乘是: ', f(128, 1))
console.log('256 的阶乘是: ', f(256, 1))
console.log('512 的阶乘是: ', f(512, 1))
console.log('1024 的阶乘是: ', f(1024, 1))
console.log('12520 的阶乘是: ', f(12520, 1))
console.log('12521 的阶乘是: ', f(12521, 1))
// // 使用尾递归迭代代码
// f = (n) => {
//   迭代 = (i, n, result) => i === n
//     ? result
//     : 迭代(i + 1, n, result * (i + 1))
//   return 迭代(1, n, 1)
// }

// f = (n) => {
//   let i = 1, result = 1, nextI, nextResult
//   while(i <= n - 1) {
//     nextI = i + 1
//     nextResult = nextI * result
//     i = nextI
//     result = nextResult
//   }
//   return result
// }

// console.log('2 的阶乘是: ', f(2))
// console.log('4 的阶乘是: ', f(4))
// console.log('8 的阶乘是: ', f(8))
// console.log('16 的阶乘是: ', f(16))
// console.log('32 的阶乘是: ', f(32))
// console.log('64 的阶乘是: ', f(64))
// console.log('128 的阶乘是: ', f(128))
// console.log('256 的阶乘是: ', f(256))
// console.log('512 的阶乘是: ', f(512))
// console.log('1024 的阶乘是: ', f(1024))
