//Valid Paranthesis

//Note: Use Stack Datastructure
/*Approach:

1. if the paranthesis is open paranthesis, put it into the stack
2. if the paranthesis is closed paranthesis then chech the top element of the stack is a matching paranthesis or not , if the paranthesis matches then pop the top element of the stack.

*/

var isValid = function (s) {
  let stack = [];
  let openingParanthesis = ["(", "{", "["];
  let paranthesis = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (openingParanthesis.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0 || stack.pop() !== paranthesis[s[i]]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

let s = "[()]"; //true