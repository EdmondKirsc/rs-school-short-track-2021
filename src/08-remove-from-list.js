/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

// const ListNode = require('../extensions/list-node');
function removeKFromList(/* l, k */) {
  throw new Error('Not implemented');
  // const data = l;
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i] === k) {
  //     data.splice(i, 1);
  //     i--;
  //   }
  // }
  // return data;
}

module.exports = removeKFromList;
