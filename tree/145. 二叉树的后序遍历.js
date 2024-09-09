// 后序遍历：左右根
var postorderTraversal = function(root) {
    const res = [];
    const dfs = function(root) {
        if (root === null) return 
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
};

var postorderTraversal = function(root, res = []) {
    if (!root) return res
    const stack = [root]
    let cur = null
    while (stack.length) {
        cur = stack.pop()
        res.push(cur.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
    return res.reverse()
};