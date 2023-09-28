function receivesAFunction(callback) {
  callback();
}

function myCallback() {
  console.log("Hello, I am the callback function!");
}

receivesAFunction(myCallback);

function returnsANamedFunction() {
  function namedFunction() {
  }

  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function");
  };
}

const anonymousFunc = returnsAnAnonymousFunction(); 