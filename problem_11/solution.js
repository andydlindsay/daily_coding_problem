/*
    Implement an autocomplete system. That is, given a query string s and a set of all 
    possible query strings, return all strings in the set that have s as a prefix.

    For example, given the query string de and the set of strings [dog, deer, deal], 
    return [deer, deal].
*/

module.exports = (inputObj) => {

    const { input, queryString } = inputObj;
    const returnArray = [];

    input.forEach((elem) => {
        if (elem.substr(0, queryString.length) === queryString) {
            returnArray.push(elem);
        }
    });

    return returnArray;
}
