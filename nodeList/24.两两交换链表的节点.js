/** 
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(null, head);
    let current = dummy;
    while (current.next !== null  && current.next.next !== null ) {
        let temp = current.next
        let temp1 = current.next.next.next
        current.next = current.next.next
        current.next.next = temp
        temp.next = temp1
        current = current.next.next
    }
    return dummy.next
};