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

 function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    // 奇数结点
    let oddHead = new ListNode();
    let evenHead = new ListNode();

    let tmpOddHead = oddHead;
    let tmpEvenHead = evenHead;
    let tmpHead = head;

    let i = 1;
    while (head !== null) {
        if (i % 2 === 1) {
            oddHead.next = head;
            oddHead = oddHead.next;
        } else {
            evenHead.next = head;
            evenHead = evenHead.next;
        }

        head = head.next;
        i++;
    }


    evenHead.next = null;
    oddHead.next = tmpEvenHead.next;
    return tmpOddHead.next;

};