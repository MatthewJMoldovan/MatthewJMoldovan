// 242. Valid Anagram
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Compares the length of the two strings. If they don't match return false
    if(s.length !== t.length){
        return false;
    }
    // Creates a object to contain the letters in each word and the amount of times that letter appears
    const counts = {};

    // Iterates over string s and increments the value for the key at c of s
    for (let c of s) {
        counts[c] = (counts[c] || 0 ) + 1;
    }

    // iterates over string t. If c of t is a key of the object counts then decrement its value. If not return false
    for(let c of t) {
        if(!counts[c]) {
            return false;
        } else  {
            counts[c]--;
        }
        return true;
    }


};