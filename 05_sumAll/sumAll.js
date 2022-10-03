const sumAll = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let sum = 0;
  if (num2 > num1) {
    for (let i = 0; i <= num2 - num1; i++) {
      sum += num1 + i;
    }
  } else if (num1 > num2) {
    for (let i = 0; i <= num1 - num2; i++) {
      sum += num1 - i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
