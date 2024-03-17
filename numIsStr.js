// User Create a function that takes an array of strings and returns an array with only the strings
//that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(arr) {
  let result = [];
  for (let str of arr) {
    for (let char of str) {
      if (!isNaN(parseInt(char))) {
        result.push(str);
        break;
      }
    }
  }
  return result;
}
