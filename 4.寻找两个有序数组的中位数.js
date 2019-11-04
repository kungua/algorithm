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
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length, len2 = nums2.length
  let shorterList, longerList, imax, imin = 0, halfLength = Math.floor((len1 + len2 + 1) / 2)
  shorterList = len1 < len2 ? nums1 : nums2
  longerList = len1 < len2 ? nums2 : nums1
  imax = len1 < len2 ? len1 : len2


  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2)
    const j = halfLength - i

    if (shorterList[i - 1] > longerList[j] && i > 0) {
      imax = i - 1
    } else if (longerList[j - 1] > shorterList[i] && i < shorterList.length) {
      imin = i + 1
    } else {
      // biggerList[j - 1] <= smallerList[i] && smallerList[i - 1] <= biggerList[j]
      // find & return
      let maxOfLeftNumber, minOfRightNumber
      if (i === 0) {
        maxOfLeftNumber = longerList[j - 1]
      } else if (j == 0) {
        maxOfLeftNumber = shorterList[i - 1]
      } else {
        maxOfLeftNumber = Math.max(shorterList[i - 1], longerList[j - 1])
      }
      if ((len1 + len2) % 2 !== 0) {
        return maxOfLeftNumber
      }

      if (i === shorterList.length) {
        minOfRightNumber = longerList[j]
      } else if (j === longerList.length) {
        minOfRightNumber = shorterList[i]
      } else {
        minOfRightNumber = Math.min(shorterList[i], longerList[j])
      }

      return (minOfRightNumber + maxOfLeftNumber) / 2
    }
  }
};
// @lc code=end

