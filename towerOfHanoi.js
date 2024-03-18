function towerHanoi(discs) {
  if (discs === 0) {
    return 0;
  } else {
    //use the formula 2^n - 1 to calculate the minimum steps
    return Math.pow(2, discs) - 1;
  }
}

// Test cases
console.log(towerHanoi(3));
console.log(towerHanoi(5));
console.log(towerHanoi(0));
