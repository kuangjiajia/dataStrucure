/**
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

 function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;

    let roadA: ListNode | null = headA;
    let roadB: ListNode | null = headB;
    while (roadA !== roadB) {
        roadA = roadA === null ? headB : roadA.next;
        roadB = roadB === null ? headA : roadB.next;
    }

    return roadA;
};