var Set = function() {

  var set = Object.create(setPrototype);
  set._storage = []; // fix me

  return set;
};

var setPrototype = {};


// takes any string and adds it to the set
// A value in the Set may only occur once
setPrototype.add = function(item) {

  if (!this._storage[item]) { //  finish contains first before checking
    this._storage[item] = item;
  } 
  // (this._storage.push(item);
};

setPrototype.contains = function(item) {

  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }

};

setPrototype.remove = function(item) {

  delete this._storage[item];

};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  .add | linear 
 *  .contains | linear
 *  .delete | constant
 *
 */


// Set length | Set.prototype.size