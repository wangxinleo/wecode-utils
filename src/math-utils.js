module.exports = {
  /**
   * 产生两个参数之间的随机数
   * @param lowerValue
   * @param upperValue
   * @returns {number}
   */
  generateRandom: (lowerValue, upperValue) => {
    const choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
  },
  /**
   * 返回数字数组的平均值
   * @param arr
   * @returns {number}
   */
  arrayAverage: arr => {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / arr.length
  },
  /**
   * 返回数字数组的总和
   * @param arr
   */
  arraySum: arr => arr.reduce((acc, val) => acc + val, 0)

  /**
   * 将数字转换为数字数组
   * @param n
   * @returns {number[]}
   */
  digitize: n => [...""+n].map(i => parseInt(i)),
}
