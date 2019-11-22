function max(array) {
  const [first, ...others] = array
  const maxOfTwo = (a, b) => a > b ? a : b
  return others.length < 1 ? first
    : maxOfTwo(first, max(others))
}

console.log(max([23,99,17,28,84])) // 99
console.log(max([1])) // 1
console.log(max([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 1
