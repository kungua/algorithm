CountSort = arr => {
  if (arr.length<=1) return arr
  let hashTable = {}
  let max = arr[0]

  for (let i=0; i<arr.length; i++){
    const n=arr[i]
    hashTable[n] = hashTable[n]===undefined?1:hashTable[n]+1
    if (n>max) max=n
  }
  const result=[]

  for(let k=1; k<=max; k++){
    if (hashTable[k]!== undefined){
      for(let m=0; m<hashTable[k]; m++){
        result.push(k)
      }
    }
  }
  return result
}

console.log(CountSort([6, 5, 3, 1, 8, 7, 2, 4]))
