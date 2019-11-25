// 找到 n 个里面最小的
// 放到最前面
// 在找到 n-1 个里面最小的
// 放到最前面

SelectSort = arr => {
  if (arr.length<=1) return arr
  for (let i = 0; i < arr.length-1; i++) {
    let minIndex = i
    for(let k=i+1;k<arr.length;k++){
      if(arr[k]<arr[minIndex]) {
        minIndex=k
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

console.log(SelectSort([5, 1, 2, 4, 3, 5, 11]))
