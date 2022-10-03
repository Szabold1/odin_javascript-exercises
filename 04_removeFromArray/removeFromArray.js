const removeFromArray = function (arr, ...removeFromArray) {
  for (let i = 0; i < removeFromArray.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === removeFromArray[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
