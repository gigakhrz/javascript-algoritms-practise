const countNumber = (array) => {
  let count = 0;
  array.forEach((item) => {
    if (item === true) {
      count += 1;
    }
  });

  return count;
};

let numbetOfTrue = countNumber([true, false, false, true, false]);

console.log(numbetOfTrue);