const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        result.push(undefined);
        i++;
        break;
      case "--discard-prev":
        result.pop();
        break;
      case "--double-next":
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (i != 0) result.push(result[result.length - 1]);
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result.filter((a) => a != undefined);
};
