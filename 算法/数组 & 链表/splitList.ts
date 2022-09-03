/**
 * https://leetcode.cn/problems/partition-list/
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function partition(head: ListNode | null, x: number): ListNode | null {
    if (head === null || head.next === null ) return head;

    let smallNode = new ListNode();
    let largeNode = new ListNode();
    let tmpSmallHead = smallNode;
    let tmpLargeHead = largeNode;

    while (head !== null) {
        if (head.val < x) {
            smallNode.next = head;
            smallNode = smallNode.next;
        } else {
            largeNode.next = head;
            largeNode = largeNode.next;
        }
        head = head.next;
    }

    largeNode.next = null;
    smallNode.next = tmpLargeHead.next;

    return tmpSmallHead.next;
};