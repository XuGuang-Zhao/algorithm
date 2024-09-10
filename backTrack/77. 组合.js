var combine = function(n, k) {
    const path = []
    const result = []
    const backTrack = (n ,k, startIndex) => {
        if (path.length === k) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backTrack(n, k, i + 1)
            path.pop()
        }
    }
    backTrack(n, k, 1)
    return result
};