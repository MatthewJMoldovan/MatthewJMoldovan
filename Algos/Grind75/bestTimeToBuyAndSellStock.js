// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


/**
 * @param {number[]} prices
 * @return {number}
 */

// Basic approach is a two pointer system. Using left as our buy and right as our sell.
var maxProfit = function(prices) {
  let left = 0; //Buy
  let right = 1; //Sell
  let max_profit = 0; //Variable to hold highest profit

  //iterates through the array 
  while(right < prices.length) {
    // if prices at [left] is less than prices at [right] we will have have profit
    if(prices[left] < prices[right]) {
      // Create profit varible to hold onto the current profit
      let profit = prices[right] - prices[left];
      // Compares max_profit and profit to see which is larger and sets max_profit
      max_profit = Math.max(max_profit, profit);
    } else {
    // if prices at [left] is greater than prices at [right] we do not have have profit therefore we can set left to right since it is lower and move the pointer along
    left = right;
    }
    // Individually increments the right pointer regardless if prices[left] < prices[right]
    right++;
  }
  console.log(max_profit);
  return max_profit;
};


maxProfit([7,6,4,3,1]);