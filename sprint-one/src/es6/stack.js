class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.height = 0;
  }

  push(value) {
    this.storage[this.height] = value;
    return this.height++;
  }

  pop() {

    if (this.height > 0) {

      var result = this.storage[this.height - 1];
      delete this.storage[this.height - 1];
    
      this.height--;
      return result;

    } else {
      return null;
    }
  }

  size() {
    return this.height;
  }
}