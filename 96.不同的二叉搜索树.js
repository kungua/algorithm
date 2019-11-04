/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let binarySearchTreeWithNNodesCountList = new Array(n + 1).fill(0);
  let b = binarySearchTreeWithNNodesCountList;
  b[1] = b[0] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      b[i] += b[j - 1] * b[i - j];
    }
  }
  return b[n];
};
