/*
    输入: nums = [-1,0,3,5,9,12], target = 9
    输出: 4
    解释: 9 出现在 nums 中并且下标为 4
*/

/** 解法1：左闭右闭
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let middle = left + ((right-left) >> 1)
        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            return middle
        }
    }
    return -1
};

/** 解法2：左闭右开
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        let middle = left + ((right-left) >> 1)
        if (target < nums[middle]) {
            right = middle;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            return middle
        }
    }
    return -1
};