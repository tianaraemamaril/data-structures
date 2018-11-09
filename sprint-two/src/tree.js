var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 
  this.children.push(new Tree(value));

};


// returns a boolean
treeMethods.contains = function(target) {
  var found = false;
  if (this.value === target) {
    found = true;
  } 

 // this.children[i].value === target


  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target) === true) {
      found = true;
    } 
  }
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?

    // addChild = if you know the reference to which tree you want to add to, 
                  it's CONSTANT, and if not, it'd be LINEAR

    // contains = LINEAR
 */
