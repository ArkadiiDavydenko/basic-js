const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let addArr = [];

    if (arr.length < 1) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--double-next') {
            addArr.push(arr[i + 1]);
        } else if (arr[i] == '--double-prev') {
            addArr.push(arr[i - 1]);
        } else if (arr[i] == '--discard-prev') {
            addArr.pop();
        } else if (arr[i] == '--discard-next') {
            addArr.push(arr[i + 2]);
            i += 2;
        } else {
            addArr.push(arr[i]);
        }
    }
    addArr.filter((item, index) => (item == undefined || item == '--discard-prev' || item == '--double-prev' || item == '--discard-next' || item == '--double-next') ? addArr.splice(index, 1) : false);

    return addArr;

}

module.exports = {
    transform
};
