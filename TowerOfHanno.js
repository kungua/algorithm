// // Definition (完全归纳法)
// 把 A 顶部的盘移到 B 记为 AB
// AB + AC 表示先 AB 然后 AC
// h(n, A, B, C) 表示 n 盘在 A 想去 C, B 无用
// // Solution
// h(1, A, B, C) = AC
// h(2, A, B, C) = h(1, A, C, B) + AC + h(1, B, A, C)
// h(2, A, B, C) = AB + AC + BC
// h(3, A, B, C) = h(2, A, C, B) + AC + h(2, B, A, C)
// h(n, A, B, C) = h(n-1, A, C, B) + AC + h(n-1, B, A, C)

const h = (n, from, cache, to) =>
  n === 1 ? `${from}->${to}\n` :
    h(n-1, from, to, cache) + '\n' + `${from}->${to}\n` +
  h(n-1, cache, from, to) + '\n'

console.log('===1|A|B|C======')
console.log(h(1, 'A', 'B', 'C'))
console.log('===2|A|B|C======')
console.log(h(2, 'A', 'B', 'C'))
console.log('===3|A|B|C======')
console.log(h(3, 'A', 'B', 'C'))
console.log('===6|A|B|C======')
console.log(h(6, 'A', 'B', 'C'))
