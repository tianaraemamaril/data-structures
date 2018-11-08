var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.height = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.height] = value;
  return this.height++;
};

stackMethods.pop = function() {

  if (this.height > 0) {

    var result = this.storage[this.height - 1];
    delete this.storage[this.height - 1];
  
    this.height--;
    return result;

  } else {
    return null;
  }
};

stackMethods.size = function() {
  return this.height;
};

