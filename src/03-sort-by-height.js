/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compareNumbers(a, b) {
  return a - b;
}
function sortByHeight(arr) {
  const positiveArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      positiveArr.push(arr[i]);
    }
  }
  const sortedPositiveArr = positiveArr.sort(compareNumbers);
  const result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedPositiveArr[j]);
      j++;
    }
  }
  return result;
}

module.exports = sortByHeight;
