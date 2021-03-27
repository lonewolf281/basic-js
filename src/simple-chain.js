const CustomError = require("../extensions/custom-error");

let chain = [];
const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      chain.push(" ");
      return chainMaker;
    }
    chain.push("" + value);
    return chainMaker;
  },
  removeLink(position) {
    if (position >= 0 && position <= chain.length) {
      chain.splice(position - 1, 1);
      return chainMaker;
    } else {
      chain = [];
      throw Error();
    }
  },
  reverseChain() {
    chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = chain.map((a) => "( " + a + " )").join("~~");
    chain = [];
    return result;
  },
};

module.exports = chainMaker;
