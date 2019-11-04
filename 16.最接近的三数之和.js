/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      const newDiff = Math.abs(target - sum);
      const oldDiff = Math.abs(target - ans);
      if (newDiff < oldDiff) {
        ans = sum;
      }
      if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      } else {
        return ans;
      }
    }
  }
  return ans;
};
