/*
  Given an integer k and a string s, find the length of the
  longest substring that contains at most k distinct characters.

  For example, given s = "abcba" and k = 2, the longest
  substring with k distinct characters is "bcb".
*/

module.exports = (input) => {
  const { s, k } = input;
  let currentIndex = 0;
  let longestSubstring = '';

  while (currentIndex <= s.length - k) {
    const substringArr = [];
    let i = 0;

    // minimum length string
    let maxIndex = currentIndex + k;
    for (i = currentIndex; i < maxIndex; i++) {
      if (s[i]) {
        if (substringArr.includes(s[i])) {
          maxIndex++;
        }
        substringArr.push(s[i]);
      }
    }

    while (true) {
      if (substringArr.includes(s[i])) {
        substringArr.push(s[i]);
      } else {
        break;
      }
      i++;
    }

    if (substringArr.length > longestSubstring.length) {
      longestSubstring = substringArr.join('');
    }

    currentIndex++;
  }

  return longestSubstring;
};
