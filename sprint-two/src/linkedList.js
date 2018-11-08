var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // if (initialValue) { // if the initial value exists
  //   list.head = initialValue;
  // }

  // create a linkedListNode instance for head and tail



  var node = new Node(value); // should Node Class be a different color?

  list.addToTail = function(value) {

    // if list.head exists, assign value to head AND tail
    // else assign value to tail 

    if (list.head === null) {
      list.head = node.value; 
      list.tail = node.head;
    } else {
        
        list.tail = value;
    }
    return list;
    
  };


// something with Node.prototype
  list.removeHead = function() {

    // if (list.head) {
    //   list.head = value;
    //   delete list.head;
    //   list.head = list.next;
    // }
    // return list;

 

  };

  list.contains = function(target) {
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
