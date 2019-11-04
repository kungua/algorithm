/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const resultArray = nums1.concat(nums2)
    resultArray.sort((a, b) => {
      return a - b
    })
    const mid = Math.floor(resultArray.length / 2)
    if (resultArray.length % 2 === 0) {
      return (resultArray[mid] + resultArray[mid - 1]) / 2
    } else {
      return resultArray[mid]
    }
};
// @lc code=end

