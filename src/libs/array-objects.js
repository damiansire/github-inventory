const getUniqueKeysFromArrayOfObjets = (array) => {
  const uniqueKeys = array.reduce((acc, obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => acc.add(key));
    return acc;
  }, new Set());

  const uniqueKeysArray = Array.from(uniqueKeys);

  return uniqueKeysArray;
};

module.exports = {
  getUniqueKeysFromArrayOfObjets,
};
