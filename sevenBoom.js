// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = (numberArray) => {
  if (numberArray.some((num) => num.toString().includes("7"))) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
};
