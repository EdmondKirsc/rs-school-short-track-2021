/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let mid = 0;
  let high = array.length - 1;
  while (array[low] < value && array[high] > value) {
    mid = low + Math.floor(((value - array[low]) * (high - low)) / (array[high] - array[low]));
    if (array[mid] < value) {
      low = mid + 1;
    } else if (array[mid] > value) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  if (array[low] === value) {
    return low;
  } if (array[high] === value) {
    return high;
  }
  return -1;
}

module.exports = findIndex;
