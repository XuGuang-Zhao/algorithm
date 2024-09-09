// 中序遍历：左中右
var inorderTraversal = function(root) {
    const res = [];
    const dfs = function(root) {
        if (root === null) return 
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
};

var inorderTraversal = function(root, res = []) {
    const stack = [];
    let cur = root;
    while(stack.length || cur) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
};