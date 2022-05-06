import longTimeOperation from "long-time-operation";
let isCalculated = false;
let lastResult;
function memoizedGetResult() {
  if (isCalculated) {
    return lastResult;
  }
  let result = longTimeOperation();
  lastResult = result;
  isCalculated = true;
  return result;
}
function showResult() {
  let result = memoizedGetResult();
  console.log("The result is:", result);
}

function memoize(fn) {
  let isCalculated = false;
  let lastResult;
  return function memoizedFn() {
    if (isCalculated) {
      return lastResult;
    }
    let result = fn();
    lastResult = result;
    isCalculated = true;
    return result;
  };
}
