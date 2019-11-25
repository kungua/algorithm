mergeSort = arr=>arr

// merge = (a, b) =>
//   a.length === 0 ? b
//     : b.length === 0 ? a
//       :a[0] > b[0]
//         ? [b[0]].concat(merge(a, b.slice(1)))
//         : [a[0]].concat(merge(a.slice(1), b))
//
//
// mergeSort = arr => {
//   let k = arr.length
//   if (k===1)  return arr
//   let left = arr.slice(0, parseInt(k/2))
//   let right = arr.slice(parseInt(k/2))
//   return merge(mergeSort(left), mergeSort(right))
// }

// inplace
mergeSort = arr => inplaceMergeSort(arr, 0, arr.length)

inplaceMergeSort = (arr, start, end) => {
  if (end-start<=1) return
  const middle = parseInt((start+end)/2)
  inplaceMergeSort(arr, start, middle)
  inplaceMergeSort(arr, middle, end)
  merge(arr, start, middle, end)
  return arr
}

merge = (arr, start, middle, end) => {
  console.log(`run merge with arr: ${arr}, start: ${start}, middle: ${middle}, end: ${end}`)
  let i = start, k = middle
  while(i<middle&&k<end) {
    while(arr[i]<=arr[k]&&i<middle) {i+=1}
    let w = 0
    while(arr[i]>arr[k]&&k<end) {k+=1;w+=1;}
    const part = arr.splice(k-w, w)
    arr.splice(i, 0, ...part)
    middle+=w
  }
  return arr
}

arr = [40, 70, 20, 10, 40, 60, 50, 30]
console.log(merge([0, 1, 3], [2, 4, 5]))
console.log(mergeSort(arr))

// insertSort = arr => {
//   for(let s=1;s<arr.length;s++){
//     const n=arr[s]
//     let i
//     for (i=s-1;i>=0;i--) {
//       if(arr[i]>n)  arr[i+1]=arr[i]
//       else          break
//     }
//     arr[i+1]=n
//   }
//   return arr
// }

// bubbleSort = arr => {
//   for (let r = 0; r < arr.length-1; r++) {
//     for (let i = 0; i < arr.length - r - 1; i++) {
//       if (arr[i] > arr[i+1]){
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//       }
//     }
//   }
//   return arr
// }

// countSort = arr => {
//   if(arr.length<=1) return arr
//   const hashTable = {}
//   let max = arr[0]
//
//   for (let i = 0; i < arr.length; i++) {
//     const k = arr[i]
//     hashTable[k]=hashTable[k]===undefined?1:hashTable[k]+1
//     if (k>max)  max=k
//   }
//   const result = []
//
//   for (let i = 1; i <= max; i++) {
//     if(hashTable[i]!==undefined){
//       for (let j = 0; j < hashTable[i]; j++) {
//         result.push(i)
//       }
//     }
//   }
//   return result
// }

// selectSort = arr => {
//   if (arr.length<=1) return arr
//   for (let i = 0; i < arr.length-1; i++) {
//     let minIndex = i
//     for (let k = i+1; k < arr.length; k++) {
//       if(arr[k]<arr[minIndex]) {
//         minIndex=k
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//   }
//   return arr
// }

// quickSort = arr => {
//   console.log('quickSort')
//   if (arr.length<=0) return arr
//   const [pivot, ...rest] = arr
//   return [
//     ...quickSort(rest.filter(n => n<=pivot)),
//     pivot,
//     ...quickSort(rest.filter(n => n>pivot))
//   ]
// }

// swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]]
//
// handlePivot = (arr, start, end) => {
//   if(end-start<=1)  return end-start-1
//   let pivot = arr[start]
//   smallEnd=start,
//   bigStart=end
//   let i=start+1
//   while(bigStart-smallEnd>1){
//     if(arr[i]<=pivot) {
//       smallEnd+=1
//       i+=1
//     } else if (arr[i]>pivot) {
//       bigStart-=1
//       swap(arr, i, bigStart)
//     }
//   }
//   swap(arr, start, smallEnd)
//   return smallEnd
// }
//
// quickSort = arr => _quickSort(arr, 0, arr.length)
//
// _quickSort = (arr, start, end) => {
//   if(end-start<=1) return arr
//   const povitIndex=handlePivot(arr, start, end)
//   _quickSort(arr, start, povitIndex)
//   _quickSort(arr, povitIndex+1, end)
//   return arr
// }
// const arr = [40, 70, 20, 10, 40, 60, 50, 30]
// console.log(quickSort(arr))
// console.log(`arr: ${arr}`)

// bSearch = (arr, n, start, end) =>{
//   if(start===end) return -1 // 搜索是不包含 end
//   let mid = parseInt((start+end)/2)
//   // console.log(mid)
//   return n===arr[mid]?mid
//     :n>arr[mid]?bSearch(arr, n, mid+1, end)
//       :n<arr[mid]?bSearch(arr, n, start, mid):undefined
// }
//
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 125, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 0, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 1, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 124, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 3, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 5, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 8, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 11, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 12, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 65, 0, 9))
// console.log(bSearch([1, 3, 5, 8, 11, 12, 65, 99, 124], 99, 0, 9))
