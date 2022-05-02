const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let countArr = 1;
        for (let elem of arr) {
            let deepCurrent = 1;
            if (Array.isArray(elem)) {
                deepCurrent += this.calculateDepth(elem);
            }
            if (countArr < deepCurrent) {
                countArr = deepCurrent;
            }
        }
        return countArr;
    }

}

module.exports = {
    DepthCalculator
};

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
console.log(depthCalc.calculateDepth([[[]]]));