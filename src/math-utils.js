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
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / arr.length;
  },
  /**
   * 返回数字数组的总和
   * @param arr
   */
  arraySum: arr => arr.reduce((acc, val) => acc + val, 0),

  /**
   * 将数字转换为数字数组
   * @param n
   * @returns {number[]}
   */
  digitize: n => [..."" + n].map(i => parseInt(i)),

  /**
   * 返回两点之间的距离
   * @param {*} x0 
   * @param {*} y0 
   * @param {*} x1 
   * @param {*} y1 
   * @returns 
   */
  distance: (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0),

  /**
   * 返回从0开始的长度为n的斐波那契数列
   * @param {*} n 
   * @returns 
   */
  fibonacci: n => {
    Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
  },

  /**
   * 返回数组的中间,若length为奇数返回中间的数，若为偶数，返回中间两个值的平均值
   * @param {*} arr 
   * @returns 
   */
  median: arr => {
    const mid = Math.floor(arr.length / 2), nums = arr.sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },

  /**
   * 将数字四舍五入到指定的位数
   * @param {*} n 
   * @param {*} decimals 
   * @returns 
   */
  round: (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`),


};
