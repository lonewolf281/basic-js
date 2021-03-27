const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .filter((a) => typeof a == "string")
    .map((a) => a.trim().substr(0, 1).toUpperCase())
    .sort()
    .join("");
};
