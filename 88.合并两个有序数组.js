/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1, len2 = n - 1, len = m + n - 1
  while (len1 >= 0 && len2 >= 0) {
    if (nums2[len2] > nums1[len1]) {
      nums1[len] = nums2[len2]
      len2--
    } else {
      nums1[len] = nums1[len1]
      len1--
    }
    len--
  }
  if (len2 >= 0) {
    nums1.splice(0, len2 + 1, ...nums2.splice(0, len2 + 1))
  }
};

