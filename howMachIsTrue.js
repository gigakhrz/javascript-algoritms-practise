const countNumber = (array) => {
  let count = 0;
  array.forEach((item) => {
    if (item === true) {
      count += 1;
    }
  });

  return count;
};

countNumber([true, false, false, true, false]);

// jusf for commit
console.log(countNumber);
