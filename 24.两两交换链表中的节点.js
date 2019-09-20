/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let pre = new ListNode(0);
  pre.next = head;
  let temp = pre;
  while(temp.next !== null && temp.next.next !== null) {
      let start = temp.next;
      let end = temp.next.next;
      temp.next = end;
      start.next = end.next;
      end.next = start;
      temp = start;
  }
  return pre.next;
};

