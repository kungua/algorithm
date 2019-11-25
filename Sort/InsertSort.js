//
insertSort = arr => {
  if (arr.length<=1) return arr
  for(let s=1;s<arr.length;s++){
    const n=arr[s] // 记住n
    let i
    for(i = s-1;i>=0;i--){
      if(arr[i]>n)  {arr[i+1]=arr[i];}
      else          {break;}
    }
    arr[i+1]=n
  }
  return arr
}
console.log(insertSort([6, 5, 3, 1, 8, 7, 2, 4]))
