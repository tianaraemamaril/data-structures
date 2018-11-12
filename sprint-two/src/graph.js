// Instantiate a new graph
var Graph = function() {
  this.nodeStorage = {};
};



// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  if (!this[node]) {
    this.nodeStorage[node] = [];
  }

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.nodeStorage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  var edges = this.nodeStorage[node];

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var innerEdge = this.nodeStorage[edge];

    for (var j = 0; j < innerEdge.length; j++) {
      if (innerEdge[j] === node) {
        innerEdge.splice(j, 1);
        break;
      }
    }
  }
  delete this.nodeStorage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {


  // iterate over fromNode to see if toNode exists
  for (var i = 0; i < this.nodeStorage[fromNode].length; i++) {
    if (this.nodeStorage[fromNode][i] === toNode) {
      return true;
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if (fromNode === toNode) {
    return; // should not add self to self
  }

  if (this.nodeStorage.hasOwnProperty(fromNode)) {
    this.nodeStorage[fromNode].push(toNode);
  } else {
    this.nodeStorage[fromNode] = [toNode];
  }

  if (this.nodeStorage.hasOwnProperty(toNode)) {
    this.nodeStorage[toNode].push(fromNode);
  } else {
    this.nodeStorage[toNode] = [fromNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var edges = this.nodeStorage[fromNode];

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var innerEdge = this.nodeStorage[edge];

    if (edge === toNode) {
      for (var j = 0; j < innerEdge.length; j++) {
        if (innerEdge[j] === fromNode) {
          innerEdge.splice(j, 1);
          this.nodeStorage[fromNode].splice(i, 1);
          return; // ends whole function
        } 
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeStorage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// A Graph consists of a finite set of vertices(or nodes) 
// and set of Edges which connect a pair of nodes.
// nodes are often referred to as VERTICES
// edges are often reffered to as ARCS

