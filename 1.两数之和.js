/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const dict = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    const diffNumber = target - element
    if (diffNumber in dict) {
      return [dict[diffNumber], i ]
    }
    dict[element] = i
  }
};

