/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null, head);
    let fast = dummy;
    let slow = dummy;
    while (n-- && fast !== null) {
        fast = fast.next
    } 
    while (fast.next !== null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
};