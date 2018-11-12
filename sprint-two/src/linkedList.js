var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // should designate a new tail when new nodes are added
  list.addToTail = function(value) {


    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  // should return the value of the former head when removeHead is called
  list.removeHead = function() { 
    var temp = list.head;
    list.head = list.head.next; // this line should remove current head
    return temp.value;
  };

  // should not contain a value that was removed // head is easier to remove
  // returns a BOOLEAN
  list.contains = function(target) {
    var currentHead = list.head;

    while (currentHead !== null) {
      
      if (target !== currentHead.value) {
        currentHead = currentHead.next;    
      } else {
        return true;
      } 
      
    } 
    
    return false;
    // if(target !== list.head.value) {
    //   list.head = list.head.next;
    // }
    
  };

  return list; 
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
 
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  .addToTail | constant 
 *  .removeHead | constant
 *  .contains | linear
 *
 */
