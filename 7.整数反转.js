/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let ans = 0;
  while (x !== 0) {
    let pop = x % 10;
    if (ans > 214748364 || (ans === 214748364 && pop > 7)) {
      return 0;
    }
    if (
      ans < -214748364 ||
      (ans === -214748364 && pop < -8)
    ) {
      return 0;
    }
    ans = ans * 10 + pop;
    x > 0 ? (x = Math.floor(x / 10)) : (x = -1 * Math.floor(Math.abs(x / 10)));
  }
  return ans;
};
