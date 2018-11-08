var Queue = function() {

  this.storage = {};
  this.last = 0;
  this.first = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value; 
  this.last++; 
};

Queue.prototype.dequeue = function() {

  if (this.last > this.first) {
    var placeHolder = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return placeHolder;
  }

};

Queue.prototype.size = function() {
  return this.last - this.first;
};
