## Daily Coding Problem: Problem #4

### Problem
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

### Solution Explained
Using a loop with an incrementing integer beginning with 1, use ES6's `Array.includes()` method to determine if the input array contains the integer. If it does, perform another loop. If it does not, return that integer. 

##### Problem Source: [Daily Coding Problem](www.dailycodingproblem.com)
