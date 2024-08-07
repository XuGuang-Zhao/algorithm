/**
 * 
 * 给你一个链表的头节点 head 和一个整数 val ，
 * 请你删除链表中所有满足 Node.val == val 的节点，
 * 并返回 新的头节点 。
 * 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const ret = new ListNode(0, head);
    let current = ret
    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next
    }
    return ret.next
};