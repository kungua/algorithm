/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length, ans = 0, start = 0
  let slidingWindow = {}
  for (let end = 0; end < n; end++) {
    const el = s[end]
    if (el in slidingWindow) {
      start = Math.max(slidingWindow[el], start)
    }
    ans = Math.max(ans, end - start + 1)
    slidingWindow[el] = end + 1
  }
  return ans
};

