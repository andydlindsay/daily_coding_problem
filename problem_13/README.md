## Daily Coding Problem: Problem #13

### Problem
Given an `integer k` and a `string s`, find the length of the longest substring that contains at most `k` distinct characters.

For example, given `s = "abcba"` and `k = 2`, the longest substring with `k` distinct characters is "bcb".

### Solution Explained
Walk through the input string `s` one character at a time. 

For each character, generate the minimum length substring of `k` characters. Then step forward one character at a time, checking to see if the new current character is already in the substring. If it is, and the new character to the substring and repeat the step-and-check until the check fails.

Test the length of the current substring against the length of the longest substring. If it is greater, replace the longest substring with the current substring.

Repeat until the `nth - k` character as any substrings started after this point would be less than the minimum length substring.

Return the longest substring.

##### Problem Source: [Daily Coding Problem](http://www.dailycodingproblem.com)
