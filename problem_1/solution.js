// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

module.exports = (arr, k) => {
    let returnValue = false;
    arr.forEach((elem, index) => {
        const diff = k - elem;
        if (arr.includes(diff) && arr.indexOf(diff) !== index) {
            returnValue = true;
        }
    });
    return returnValue;
};
