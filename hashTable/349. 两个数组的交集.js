/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的 交集。
 * 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 */

var intersection = function(nums1, nums2) {
    // 创建一个Set
    const numSet = new Set()
    const resultSet = new Set()
    // 遍历第一个数组
    for (const num of nums1) numSet.add(num)
    // 比较第二个数组，如果有这个值，就向结果里添加
    for (const num of nums2) {
        if (numSet.has(num)) {
            resultSet.add(num)
        }
    }
    return Array.from(resultSet)
};