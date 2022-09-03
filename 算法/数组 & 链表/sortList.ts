/**
 * https://youxuleetcode.cn/problems/sort-list/
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

//  class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

 function sortList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    return mergeSort(head);

    function mergeSort(head: ListNode) {
        if (head==null || head.next==null) return head;

        let slowHead: ListNode = head;
        let fastHead = head.next.next;

        while (fastHead !== null && fastHead.next !== null) {
            slowHead = slowHead.next!;
            fastHead = fastHead.next.next;
        }

        const r = mergeSort(slowHead.next!);
        slowHead.next = null;
        const l = mergeSort(head);

        return mergeNode(l, r);
    }


    function mergeNode(node1: ListNode, node2: ListNode) {
        if (node1 === null) return node2;
        if (node2 === null) return node1;
        
        let tmpHead = new ListNode(-1);
        let next = tmpHead;
        while (node1 && node2) {
            if (node1.val > node2.val) {
                next.next = node2
                node2 = node2.next!;
            } else {
                next.next = node1
                node1 = node1.next!;
            }
            
            next = next.next;
        }

        if (node1 === null) next.next = node2;
        if (node2 === null) next.next = node1;

        return tmpHead.next;
    }
};