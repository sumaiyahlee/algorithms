/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dict = {
        "(": ")",
        "{": "}",
        "[": "]",
      }
    
      const stack = [];
    
      for (const paran of s) {
        if (dict.hasOwnProperty(paran)) {
          stack.push(paran)
        } else {
          const closeParan = stack.pop();
          if (paran !== dict[closeParan]) {
            return false;
          }
        }
      }
    
      if (stack.length == 0) {
        return true;
    }
};