class Sorter {

  constructor(array = []) {
    this.array = array;
    this.compare = (left, right) => left - right;
  }

  add(newElement) {
    this.array.push(newElement);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }
  
  sort(indices) {
    indices.sort((a, b) => a - b);
    let tempArray = [];
    for (let i of indices) {
      tempArray.push(this.array[i]);
    }
    tempArray.sort(this.compare);
    let j = 0;
    for (let e of tempArray) {
      this.array[indices[j]] = e;
      j++;
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
};


module.exports = Sorter;