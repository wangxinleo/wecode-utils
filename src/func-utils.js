module.exports = {
  /**
   * 转换异步函数的callback返回成promise
   * @param func
   * @returns {function(...[*]): Promise<unknown>}
   */
  promisify: func => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        func(...args, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
  },
  /**
   * 传入一个函数数组，使每一个函数运行结束后再进入下一个函数
   * @param arr
   * @returns {*}
   */
  runPromisesInSeries: arr => {
    return arr.reduce((previousValue, currentValue) => {
      previousValue.then(currentValue);
      return Promise.resolve();
    });
  },
};
