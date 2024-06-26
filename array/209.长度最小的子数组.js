/**
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
`  示例：
    输入：s = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。`
 * 
 */

function findMinArr(s, nums) {
    let i = 0;
    let sum = 0;
    let subLength = 0;
    let result = Infinity;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= s) {
            subLength = j - i + 1;
            result = result < subLength ? result : subLength;
            sum = sum - nums[i]
            i++;
        }
    }
    return result === Infinity ? 0 : result
}

console.log(findMinArr(7, [2,3,1,2,4,3]))