## Daily Coding Problem: Problem #33

### Problem
This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers,
print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence `[2, 1, 5, 7, 2, 0, 5]`, your algorithm should print out:
```
    2
    1.5
    2
    3.5
    2
    2
    2
```

### Solution Explained
Walk through the input array, adding one element at a time to a new array.

After each element is added to the new array, sort the new array ascending.

Use the length of the new array to determine if there are an even or odd number of elements. `Console.log` out the median value of the new array.

Repeat until all elements from the input array have been added to the new array.

##### Problem Source: [Daily Coding Problem](http://www.dailycodingproblem.com)
