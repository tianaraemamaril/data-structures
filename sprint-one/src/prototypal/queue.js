var Queue = function() {

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.first = 0;
  newQueue.last = 0;

  return newQueue;
  
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value; 
  this.last++; 
};

queueMethods.dequeue = function() {

  if (this.last > this.first) {
    var placeHolder = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return placeHolder;
  } 
};

queueMethods.size = function() {
  return this.last - this.first;
};

