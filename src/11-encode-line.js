/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  let count = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === str[i + 1]) {
      count++;
      if (i === 0 && count > 1) {
        arr.unshift(count);
      }
    } else if (count > 1) {
      arr.unshift(count);
      arr.unshift(str[i]);
      count = 1;
    } else {
      arr.unshift(str[i]);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
