// Create a function that takes two dates and returns the number of days
// between the first and second date.

const getDays = (date1, date2) => {
  diff = date1.getTime() - date2.getTime();

  const daysDiff = Math.ceil(diff / (1000 * 3600 * 24));

  return daysDiff;
};

//
