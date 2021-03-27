const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let addition = [];

  options.repeatTimes || (options.repeatTimes = 1);
  options.additionRepeatTimes || (options.additionRepeatTimes = 1);
  options.additionSeparator || (options.additionSeparator = "|");
  if (typeof options.addition != "string" && options.addition !== undefined) {
    options.addition += "";
  }

  console.log(str);
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(options.addition);
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str + addition.join(options.additionSeparator));
    console.log(str);
  }
  console.log(result);
  options.separator || (options.separator = "+");
  return result.join(options.separator);
};
