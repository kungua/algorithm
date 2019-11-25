// 6 5 3 1 8 7 2 4

// const arr = [6, 5, 3, 1, 8, 7, 2, 4]

const arr = [6, 5, 3, 1, 8, 7, 2, 4]

const merge = (a, b) =>
  a.length === 0 ? b
    : b.length === 0 ? a
      : a[0] > b[0]
        ?[b[0]].concat(merge(a, b.slice(1)))
        :[a[0]].concat(merge(a.slice(1), b))

// sort 接受一个数组 返回一个排好序的数组
const sort = arr => {
  // 思路是先排好一半 在排好一半 最后 merge 一下
  let k = arr.length
  if (k===1){return arr}
  let left = arr.slice(0, parseInt(k / 2))
  let right = arr.slice(parseInt(k / 2))
  return merge(sort(left), sort(right))
}

console.log(`数组 ${arr} 排序后: `)
console.log(sort(arr))

// merge 接收两个数组，返回一个新的数组(人类思路)
// const merge = (a, b) => {
//   let c = [], i = 0, k = 0
//
//   while(i < a.length || k < b.length) {
//     if (i >= a.length) {c.push(b[k]); k+=1;}
//     else if (k >= b.length) {c.push(a[i]); i+=1;}
//     else if (a[i] < b[k]) {c.push(a[i]); i+=1;}
//     else             {c.push(b[k]); k+=1;}
//   }
//
//   return c
// }

// merge 接收两个数组，返回一个新的数组(数学归纳)
// const merge = (a, b) =>
//   a.length === 0 ? b
//     : b.length === 0 ? a
//       : a[0] > b[0]
//         ?[b[0]].concat(merge(a, b.slice(1)))
//         :[a[0]].concat(merge(a.slice(1), b))
//
//
// const start = new Date()
// console.log('对 [], [] 这两个数组排序获得: ')
// console.log(merge([], []))
// console.log('对 [1], [7, 8] 这两个数组排序获得: ')
// console.log(merge([1], [7, 8]))
// console.log('对 [7], [1, 8] 这两个数组排序获得: ')
// console.log(merge([7], [1, 8]))
// console.log('对 [1, 4], [7, 8] 这两个数组排序获得: ')
// console.log(merge([1, 4], [7, 8]))
// console.log('对 [1, 4], [3, 5] 这两个数组排序获得: ')
// console.log(merge([1, 4], [3, 5]))
// console.log('对 [1, 4], [2, 3] 这两个数组排序获得: ')
// console.log(merge([1, 4], [2, 3]))
// console.log('对 [2, 4], [1, 5] 这两个数组排序获得: ')
// console.log(merge([2, 4], [1, 5]))
// console.log('对 [2, 4], [1, 3] 这两个数组排序获得: ')
// console.log(merge([2, 4], [1, 3]))
// console.log('对 [1, 2], [3, 4] 这两个数组排序获得: ')
// console.log(merge([1, 2], [3, 4]))
// console.log(`${new Date() - start} ms spent`)
