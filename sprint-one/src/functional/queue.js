var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first;
  var last;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {

    delete storage[size];

    if (size > 0) {
      size--;
    }
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


// .Keys to change to array first?