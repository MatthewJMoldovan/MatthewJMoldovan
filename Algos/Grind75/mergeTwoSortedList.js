
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // Create tempNode to act as pointer to head of merged list
    let tempNode = new ListNode(0, null);
  // Create node to hold out merged list
    let currentNode = tempNode;
  // Enters into while loop while both list1 and list2 are not null
    while(list1 && list2) {
  // Compares values of list1 and list2. if list1 is less than list2 append the node to our merged list and go to the next value of the list node
      if(list1.val < list2.val){
        currentNode.next = list1;
        list1 = list1.next;
      } else {
  // Compares values of list1 and list2. if list2 is less than list1 append the node to our merged list and go to the next value of the list node
        currentNode.next = list2;
        list2 = list2.next;
      }
  // Move pointer to the next position in our merged list
      currentNode = currentNode.next;
    }
  // After breaking out of the while loop list1 or list2 will be null. If the other is not yet null append the rest of the list to the merged list
    currentNode.next = list1 || list2;
  // returns the pointer to the head of our merged list
    return tempNode.next;
};