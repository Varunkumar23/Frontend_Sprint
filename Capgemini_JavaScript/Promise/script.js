console.log("Introduction to Promises in JAVA SCRIPT");

// promise is an object which represents eventual completion or failure of an asynchrouns task

let myPromise = new Promise((res, rej) => {
  let pizzaReady = false;
  if (pizzaReady) {
    res("Pizza is ready!");
  } else {
    rej("Wait for 15 minutes more!");
  }
});

console.log(myPromise);

myPromise
  .then((t) => console.log(t))
  .catch((c) => console.log(c))
  .finally((f) => console.log("Iam finally"));
