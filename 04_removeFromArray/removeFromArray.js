const removeFromArray = function(initialArray, ...elementsToRemoveArray) {
    const filteredArray = initialArray.filter(item => !elementsToRemoveArray.includes(item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
