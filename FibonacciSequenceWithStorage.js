const f = n => {
  const array = [0, 1]
  for(let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}

console.log(`${f(0)},${f(1)},${f(2)},${f(3)},${f(4)},${f(5)},${f(6)},`)

const begin1 = new Date();
console.log(`f(44): ${f(44)}`)
console.log("斐波那契 44 耗费: " + (new Date() - begin1) + "ms")

const begin2 = new Date();
console.log(`f(45): ${f(45)}`)
console.log("斐波那契 45 耗费: " + (new Date() - begin2) + "ms")

var begin3 = new Date();
console.log(`f(46): ${f(46)}`)
console.log("斐波那契 46 耗费: " + (new Date() - begin3) + "ms")

var begin4 = new Date();
console.log(`f(47): ${f(47)}`)
console.log("斐波那契 47 耗费: " + (new Date() - begin4) + "ms")

var begin5 = new Date();
console.log(`f(1024): ${f(1024)}`)
console.log("斐波那契 1024 耗费: " + (new Date() - begin5) + "ms")
