module.exports = {
  /**
   * 将本地日期格式转换为 ISO 日期
   * @param date
   * @returns {string}
   * @constructor
   */
  ISODateString: (date) => {
    let pad = (n) => n < 10 ? "0" + n : n;
    return date.getUTCFullYear() + "-"
      + pad(date.getUTCMonth() + 1) + "-"
      + pad(date.getUTCDate()) + "T"
      + pad(date.getUTCHours()) + ":"
      + pad(date.getUTCMinutes()) + ":"
      + pad(date.getUTCSeconds()) + "Z";
  },
}
