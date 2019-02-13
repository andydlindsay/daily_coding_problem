/*
    This problem was asked by Microsoft.

    Compute the running median of a sequence of numbers. That is, given a stream of numbers,
    print out the median of the list so far on each new element.

    Recall that the median of an even-numbered list is the average of the two middle numbers.

    For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:
    2
    1.5
    2
    3.5
    2
    2
    2
*/

function solution(input) {

    const newArr = [];
    input.forEach((elem) => {
        newArr.push(elem);
        newArr.sort((a, b) => {
            if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        const halfway = Math.floor(newArr.length / 2);
        if (newArr.length % 2 === 0) {
            console.log((newArr[halfway - 1] + newArr[halfway]) / 2);
        } else {
            console.log(newArr[halfway]);
        }
    });

}

module.exports.solution = solution;
