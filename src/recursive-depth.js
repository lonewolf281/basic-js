const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepths = 1;
    for (let x of arr) {
      if (Array.isArray(x)) {
        let depth = this.calculateDepth(x) + 1;
        maxDepths > depth || (maxDepths = depth);
      }
    }
    return maxDepths;
  }
};
