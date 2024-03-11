// Create a function that determines whether a number is Oddish or Evenish.
// A number is Oddish if the sum of all of its digits is odd,
// and a number is Evenish if the sum of all of its digits is even.
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

const oddishOrEvenish = (number) => {
  const numberString = number.toString().split("");
  const splitedNumbers = numberString.map((num) => parseInt(num));

  num = splitedNumbers.reduce((acumulator, curentValue) => {
    return acumulator + curentValue;
  }, 0);

  if (num % 2 == 0) {
    return "odish";
  } else {
    return "evenish";
  }
};
