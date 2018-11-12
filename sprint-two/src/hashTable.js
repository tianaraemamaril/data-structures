var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // set	
  var index = getIndexBelowMaxForKey(k, this._limit); // returns given string into an integer between 0 and max
  // k = key  v = value
  // should overwrite values that have the same keys
  this._storage.set(index, v);
};

// get
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

// each won't work - set undefined?
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

  //  if (!bucket) {
  // 	return null;
  // } else {

  // 	  for (var i = 0; i < bucket.length; i++) {
  // 	  	var tuple = bucket[i]; // second level array

  // 	  	if (tuple && tuple[0] === k) { 
  // 	  		delete tuple;
  // 	  	}

  // 	  }
  //   }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// keys are numerical indices
// only increases the size in memory when necessary
// reduces the size in memory when possible

// Any index that contains key/value pairs will contain a 
// bucket array

// key / value pairs are stored in tuples
// 0 is the key, 1 is the value