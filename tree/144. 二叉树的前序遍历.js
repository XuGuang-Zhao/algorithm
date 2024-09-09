// 前序遍历：中左右
var preorderTraversal = function(root) {
    const res = [];
    const dfs = function(root) {
        if (root === null) return 
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
};

// 迭代法
var preorderTraversal = function(root, res=[]) {
    if (!root) return res
    const stack = [root]
    let cur = null;
    while (stack.length) {
        cur = stack.pop();
        res.push(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return res
};