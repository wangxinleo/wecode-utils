module.exports = {
  /**
   * 返回两个日期之间的差异 (以天为值)
   * @param dateInitial
   * @param dateFinal
   * @returns {number}
   */
  getDayDiffBetweenDates: (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24),
}
