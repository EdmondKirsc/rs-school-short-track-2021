/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  const result = [];
  names.forEach((key) => {
    if (typeof obj[key] !== 'undefined') {
      obj[key] += 1;
      result.push(`${key}(${obj[key]})`);
    } else if (result.includes(key)) {
      obj[key] = 1;
      result.push(`${key}(${obj[key]})`);
    } else {
      obj[key] = 0;
      result.push(`${key}`);
    }
  });
  return result;
}

module.exports = renameFiles;
