/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */

// 1. 双指针
var reverseList = function(head) {
    let pre = null;
    let current = head;
    while (current) {
        let temp = current.next;
        current.next = pre;
        pre = current;
        current = temp;
    }
    return pre;
};

// 2. 递归
var reverseList2 = function(head) {
    return reverse(null, head)
 };
 
 
 var reverse = function(pre, current) {
     if (!current) return pre;
     const temp = current.next;
     current.next = pre;
     return reverse(current, temp)
 }