/*
    This problem was asked by Facebook.

    Given a string of round, curly, and square open and closing brackets,
    return whether the brackets are balanced (well-formed).

    For example, given the string "([])[]({})", you should return true.

    Given the string "([)]" or "((()", you should return false.
*/

module.exports = (input) => {
    
    const chars = {};
    const opposites = {
        '[': ']',
        ']': '[',
        '{': '}',
        '}': '{',
        '(': ')',
        ')': '('
    }

    for (const char of input) {
        chars[char] = chars[char] + 1 || 1;
    }

    let result = true;

    for (const char in chars) {
        const opposite = opposites[char];
        if (chars[char] !== chars[opposite]) {
            result = false;
        }
    }

    return result;

};
