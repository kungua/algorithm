/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let listNode1 = l1
  let listNode2 = l2

  let preCursor = new ListNode(null)
  let cursor = preCursor

  let carry = 0 // 进位
  let sum = 0

  while (listNode1 !== null || listNode2 !== null) {
    let num1 = (listNode1 !== null) ? listNode1.val : 0
    let num2 = (listNode2 !== null) ? listNode2.val : 0

    sum = num1 + num2 + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10

    cursor.next = new ListNode(sum)
    cursor = cursor.next

    if(listNode1 !== null) { listNode1 = listNode1.next }
    if(listNode2 !== null) { listNode2 = listNode2.next }
  }

  if(carry === 1) {
    cursor.next = new ListNode(carry)
  }

  return preCursor.next
};

