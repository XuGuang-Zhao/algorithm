/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，
 * 且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 输入：n = 3 输出：[[1,2,3],[8,9,4],[7,6,5]]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 1. 定义数组
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    // 2. 定义起始位置
    let startX = 0, startY = 0;
    // 3. 定义旋转圈数
    let loop = n >> 1;
    // 4. 定义中间位置
    let mid = n >> 1;
    // 5. 定义每一层的个数
    let offset = 1
    // 6. 定义赋值的count
    let count = 1
    // 左闭右开
    while(loop--) {
        let row = startX, col = startY;
        // 从左到右
        for (; col < n - offset; col++) {
            arr[row][col] = count++
        }
        // 从上到下
        for (; row < n - offset; row++) {
            arr[row][col] = count++
        }
        // 从右到左
        for (; col > startY; col--) {
            arr[row][col] = count++
        }
        // 从下到上
        for (; row > startX; row--) {
            arr[row][col] = count++
        }
        startX++;
        startY++;
        offset++;
    }
    if (n % 2 === 1) arr[mid][mid] = count
    return arr
};