// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //Create a stack to store characters
    let stack = [];
    //Create a hash map to store key value pairs 
    let hashMap = {'(':')','[':']','{':'}'};
    //iterates through the string
    for(c of s){
      //If 'c' is a key in my hash map push it into the stack
      if(hashMap[c]) {
        stack.push(hashMap[c])
      // Verify stack isnt empty and checks if 'c' is the value to last pair stored in the stack then removes it from the stack
      } else if (stack.length > 0 && stack[stack.length-1] === c){
        stack.pop()
      // If 'c' is not the correct value for the most recent pair in the stack returns false
      } else {
        return false;
      }
    }
    // If the stack is empty once the loop has been exited return true, if not return false
    return stack.length === 0;
};