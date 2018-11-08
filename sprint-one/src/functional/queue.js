var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0; // start with last because a person in line is also the last


  someInstance.enqueue = function(value) {
    storage[last] = value; // adds a person to the line
    return last++; // last = 1
  };

  someInstance.dequeue = function() {

    if (last > first) {
      var placeHolder = storage[first];
      delete storage[first];
      first++;
      return placeHolder;
    }

  };

  someInstance.size = function() {
    size = last - first;
    return size;
  };

  return someInstance;
};


// .Keys to change to array first?



