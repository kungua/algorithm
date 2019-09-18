/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ans = [];
  function getCombine(n, k, start, list) {
    if (k === 0) {
      return ans.push([...list]);
    }

    for (let i = start; i <= n - k + 1; i++) {
      list.push(i);
      getCombine(n, k - 1, i + 1, list);
      list.pop();
    }
  }
  getCombine(n, k, 1, []);
  return ans;
};
