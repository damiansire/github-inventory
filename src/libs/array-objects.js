//1
const getUniqueKeysFromArrayOfObjets = (array) => {
  const uniqueKeys = array.reduce((acc, obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => acc.add(key));
    return acc;
  }, new Set());

  return Array.from(uniqueKeys);
};

/*
(array) => {
  const uniqueKeys = new Set();
  array.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      uniqueKeys.add(key);
    });
  });

  return Array.from(uniqueKeys);
};

//3
const getUniqueKeys = (array) => {
  const allKeys = [].concat(...array.map(Object.keys));
  const uniqueKeys = [...new Set(allKeys)];
  return uniqueKeys;
};

*/

module.exports = {
  getUniqueKeysFromArrayOfObjets,
};
