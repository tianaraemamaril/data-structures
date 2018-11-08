var Queue = function() {
  
  var newQueue = {};
  newQueue.storage = {};
  newQueue.last = 0;
  newQueue.first = 0;

  _.extend(newQueue, queueMethods);

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
