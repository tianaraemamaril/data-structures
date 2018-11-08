var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // if (initialValue) { // if the initial value exists
  //   list.head = initialValue;
  // }

  // create a linkedListNode instance for head and tail

  list.addToTail = function(value) {

    var node = new Node(value); 

    node.head = value;
    node.next = null;
    node.last = null;

    // if list.head exists, assign value to head AND tail
    // else assign value to tail 

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

    var tempHead = list.head;
    list.head = list.head.next;
    return tempHead.value;
 
  };
  
  // returns a BOOLEAN
  list.contains = function(target) {

    var currentHead = list.head;

    if (target !== currentHead.value) {
      currentHead = currentHead.next;
      return false;
    } else {
      return true;
    }

    
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
 */
