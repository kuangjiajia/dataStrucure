/**
 * https://leetcode.cn/problems/rotate-list/
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

 function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null || k === 0) return head; 
    
    let tmpHead: ListNode | null = head;
    let len = 1;
    while (head.next !== null) {
        head = head.next;
        len++;
    }

    head.next = tmpHead;
    head = head.next;

    let i = 1;
    while (i <= len - (k % len)) {
        [tmpHead, head] = [head, head!.next];
        i++;
    }

    tmpHead!.next = null;
    return head;
};