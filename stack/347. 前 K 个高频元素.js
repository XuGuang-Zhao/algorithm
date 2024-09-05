/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const dict = {}
    const res = []
    for (const num of nums) {
        dict[num] ? dict[num] += 1 : dict[num] = 1
    }

    const heap = new PriorityQueue({
        compare: (a,b) => a.value - b.value
    })

    for(const [key, value] of Object.entries(dict)) {
        heap.enqueue({key, value})
        if (heap.size() > k) heap.dequeue()
    }

    while (heap.size()) {
        res.push(heap.dequeue().key)
    } 

    return res

};