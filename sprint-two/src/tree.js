var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};


// each child is iteself a tree
// push into newTree.children
treeMethods.addChild = function(value) {

  this.children.push(new Tree(value));

};

// returns a BOOLEAN
treeMethods.contains = function(target) {

  // iterate through each array to check for target
  // children could be nested

  var inTree = false;

  // Recursion - call on contains || while (this.children !== null)

  if (this.value === target) {
    inTree = true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target) === true) {
      inTree = true;
    }
  }


  return inTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  .addChild | if you know the reference of the tree you want to add to, 
                  it's CONSTANT, and if not, LINEAR
 *  .contains | linear
 *  
 *
 */
