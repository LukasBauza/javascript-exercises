const reverseString = function(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
