class MinervaFunctions {
  static shallowCopy(objectArray) {
    return objectArray.slice();
  }

  static count(objectArray) {
    return objectArray.length;
  }

  static max(objectArray) {
    return Math.max(objectArray);
  }

  static min(objectArray) {
    return Math.min(objectArray);
  }

  static sum(objectArray, column) {
    return objectArray.reduce((a, c) => a[column] + c[column]);
  }

  static avg(objectArray, column) {
    const sum = Index2.sum(objectArray, column);
    return sum / Index2.length;
  }

  static getPage(objectArray, index, pageSize) {
    if (index) {
      if (pageSize) {
        return objectArray.slice(index, pageSize);
      }
      return objectArray.slice(index);
    }
    return objectArray;
  }

  static groupBy(objectArray, column) {
    const grouped = objectArray.reduce((accumulator, currentValue) => {
      (accumulator[currentValue[column]] = accumulator[currentValue[column]]
        || []).push(currentValue);
      return accumulator;
    }, {});
    return grouped;
  }
}

module.exports = MinervaFunctions;
