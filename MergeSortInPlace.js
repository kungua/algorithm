const arr = [6, 5, 3, 1, 8, 7, 2, 4]
const arr1 = [1, 3, 5, 6, 2, 4, 7, 8]
// 自顶向下
// // 就地 merge
// // merge 接收两个参数 第一个是 a 数组 第二个是 middle 整数、分割线
// const merge = (a, middle) => {
//   // [0, ...middle) 是排好序的
//   // [middle,  a.length) 也是排好序的
//   // 目标是让 a 整体排好序
//   // 我有一个左右手
//   let i = 0, k = middle
//   while(i<middle&&k<a.length) {
//     while(a[i]<=a[k] && i<middle){i+=1}
//     let w = 0
//     while(a[i]>a[k] && k<a.length) {k+=1;w+=1;}
//     let part = a.splice(k-w, w)
//     a.splice(i, 0, ...part)
//     i += w
//     middle += w
//   }
//   return a
// }

// 改进就地 merge
// merge 接收两个参数 第一个是 a 数组 第二个是 middle 整数、分割线
const merge = (a, start, middle, end) => {
  // [start, ...middle) 是排好序的
  // [middle, end) 也是排好序的
  // 目标是让 a 整体排好序
  // 我有一个左右手
  console.log(`开始一次mege:arr:${a},start:${start},middle:${middle},end:${end}`)
  let i = start, k = middle
  while(i<middle&&k<end) {
    while(a[i]<=a[k] && i<middle){i+=1}
    let w = 0
    while(a[i]>a[k] && k<end) {k+=1;w+=1;}
    let part = a.splice(k-w, w)
    a.splice(i, 0, ...part)
    i += w
    middle += w
  }
  console.log(`完成一次mege:arr:${a}`)
  return a
}

// // 就地 sort
// // sort 接受一个数组 返回一个排好序的数组
sort = arr =>
  // 思路是先排好一半 在排好一半 最后 merge 一下
  inplaceSort(arr, 0, arr.length)

inplaceSort = (arr, start, end) => {
  if (end - start <= 1) return
  let middle = parseInt((start+end)/2)
  inplaceSort(arr, start, middle)
  inplaceSort(arr, middle, end)
  merge(arr, start, middle, end)
  return arr
}

const arr3 = [1, 5, 3]
console.log(`数组 ${arr} 排序后: `)
console.log(sort(arr))

// console.log(`数组 ${arr3} 排序后: `)
// console.log(sort(arr3))
// console.log(`数组 ${arr1} 排序后: `)
// console.log(merge(arr1, 0, 4, 8))
