let depend = true;

let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)
  setTimeout(() => {
    if (depend) {
      myResolve(); // when successful
    } else {
      myReject(); // when error
    }
  }, 2000);
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    console.log("succes");
  },
  function (error) {
    console.log("error");
  }
);

const exapmle = () => {
  return myPromise;
};
