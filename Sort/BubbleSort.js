bubbleSort = arr => {
  if (arr.length<=1) return arr
  for(let j=arr.length-1;j>0;j--){
    for (let i = 0; i < j; i++) {
      if (arr[i]>arr[i+1])   [arr[i+1],arr[i]] =  [arr[i],arr[i+1]]
    }
  }
  return arr
}

console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]))
