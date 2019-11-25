// 归并排序(自底向上)
sort = arr => {
  for (let size=1; size<arr.length; size*=2) {
    for (let w=0; w<arr.length; w+=size*2) {
      merge(arr, w, w+size, w+size*2)
    }
  }
  return arr
}

merge = (a, start, middle, end)
