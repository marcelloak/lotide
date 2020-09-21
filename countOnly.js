const countOnly = function(allItems, itemsToCount) {
  const count = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (count[item]) {
        count[item] += 1;
      } else {
        count[item] = 1;
      }
    }
  }
  return count;
}

module.exports = countOnly;