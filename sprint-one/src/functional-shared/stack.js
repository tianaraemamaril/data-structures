var Stack = function() {

  var newStack = {};
  newStack.storage = {};
  newStack.height = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {}; // use the keywords this

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

