const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  const month = Math.floor((Date.prototype.getMonth.call(date) - 2) / 3);
  switch (month) {
    case 0:
      return "spring";
      break;
    case 1:
      return "summer";
      break;
    case 2:
      return "autumn";
      break;
    default:
      return "winter";
  }
};
