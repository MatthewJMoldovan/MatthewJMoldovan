// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // Start by normalizing the string removing any non-alphanumeric characters
    let normalized = s.toLowerCase().replace(/[^\w\s]/gi, '').replaceAll(' ','').replaceAll('_','')
  // Use a two pointer solution. One at the beginning of the string and the other at the end of the string
    let left = 0;
    let right = normalized.length-1;
  // Loop through the length of the string 
    for(let i = 0; i < normalized.length; i++)
    {
  // Compare the values of the two pointers. If they are not the same return false
      if(normalized[left] !== normalized[right])
      {
        console.log('false');
        return false;
  // If they are the same increment the left pointer and decrement the right pointer
      } else {
        left ++;
        right --;
      }
    }
  // If the loop was not broken return true
    console.log('true');
    return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");