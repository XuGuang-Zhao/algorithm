/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [], len = nums.length
   // 将数组排序
   nums.sort((a, b) => a - b)
   for (let i = 0; i < len; i++) {
       let l = i + 1, r = len - 1, iNum = nums[i]
       // 数组排过序，如果第一个数大于0直接返回res
       if (iNum > 0) return res
       // 去重
       if (iNum == nums[i - 1]) continue
       while(l < r) {
           let lNum = nums[l], rNum = nums[r], threeSum = iNum + lNum + rNum
           // 三数之和小于0，则左指针向右移动
           if (threeSum < 0) l++ 
           else if (threeSum > 0) r--
           else {
               res.push([iNum, lNum, rNum])
               while(l < r && nums[l] == nums[l + 1]){
                   l++
               }
               while(l < r && nums[r] == nums[r - 1]) {
                   r--
               }
               l++
               r--
           }
       }
   }
   return res
};