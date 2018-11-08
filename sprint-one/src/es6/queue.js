class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.last = 0;
    this.first = 0;
  }

  enqueue(value) {
    this.storage[this.last] = value; 
    this.last++; 
  }

  dequeue() {

    if (this.last > this.first) {
      var placeHolder = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return placeHolder;
    }

  }

  size() {
    return this.last - this.first;
  }


}



// Functional - function that creates an object inside the function and returns it
// Functional Shared - builds on top of the created object with extend
// Prototypal - sames as Functional Shared, but uses Object.create
// Pseudoclassical - uses new to create object, after it's defined - methods are created on top of .prototype
// ES6 - uses constructor to create a Class