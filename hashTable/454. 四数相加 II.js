/**
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 * 
 */

var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = {}
    let count = 0
    for (const a of nums1) {
        for(const b of nums2) {
            if (!map[a+b]) {
                map[a+b] = 1
            } else {
                map[a+b] += 1
            }
        }
    }
    for (const c of nums3) {
        for (const d of nums4) {
            const sum = 0 - (c + d)
            if (map[sum]) count += map[sum]
        }
    }
    return count
};