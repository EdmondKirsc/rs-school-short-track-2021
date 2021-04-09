/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const arr = domains.map((elem) => elem.split('.').reverse().map((subelem) => `.${subelem}`));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      arr[i][j] = arr[i][j - 1] + arr[i][j];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (obj[arr[i][j]] === undefined) {
        obj[arr[i][j]] = 1;
      } else {
        obj[arr[i][j]] += 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
