// 性能太低
// 以某个元素为基准 小的往左走 大的往右走
// quickSort = arr => {
//   const [pivot, ...rest] = arr
//   return arr.length <= 1 ? arr
//     : [
//       ...quickSort(rest.filter(n => n < pivot)),
//       pivot,
//       ...quickSort(rest.filter(n => n > pivot)),
//     ]
// }

// 还是很低
// sort = arr => {
//   let left=[], right=[]
//   arr.slice(1).map(n => {
//     if (n < arr[0]) left.push(n)
//     else            right.push(n)
//   })
//   return [...left, arr[0], ...right]
// }

// swap 不重要 不需要看
swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

// 分左右 换位置
handlerPivot = (arr, start, end) => {
  // if (end - start === 0) { return -1;} // 数组长度为0
  // if (end - start === 1) {return 0;}
  if(end-start<=1) {return end-start-1;} // 这一句等价于上面两句
  let pivot=arr[start], smallStart=smallEnd=start,
    bigStart=end
  let i=start+1
  while(bigStart-smallEnd>1){
    // console.log(`执行一次移位, arr[i]: ${arr[i]}, pivot: ${pivot}`)
    if(arr[i]<pivot) {
      smallEnd+=1
      swap(arr, i, smallEnd)
      i+=1
      // console.log('发现一个小于pivot的数移到小数组中移动结束后')
      // console.log(`arr: ${arr}, smallEnd: ${smallEnd}, `)
    } else if(arr[i]>pivot){
      bigStart-=1
      swap(arr, i, bigStart)
      // console.log('发现一个大于pivot的数移到大数组中移动结束后')
      // console.log(`arr: ${arr}, bigStart: ${bigStart}, `)
    }
  }

  swap(arr, start, smallEnd)
  return smallEnd
}
// console.log(handlerPivot(arr, 0, 7))
// console.log(arr)

const arr = [40, 70, 20, 10, 60, 50, 30]
quickSort = arr => _quickSort(arr, 0, arr.length)
_quickSort = (arr, start, end) => {
  if (end-start<=1) {return arr}
  const pivotIndex=handlerPivot(arr, start, end)
  _quickSort(arr, start, pivotIndex)
  _quickSort(arr, pivotIndex+1, end)
  return arr
}

var begin = new Date();
console.log(`数组 ${arr} 排序后: `)
console.log(quickSort(arr))
console.log("排序耗费: " + (new Date() - begin) + "ms")
