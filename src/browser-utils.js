// 浏览器

module.exports = {
  /**
   * 如果页的底部可见, 则返回true, 否则为false
   * @returns {boolean|number}
   */
  bottomVisible: () => {
    return document.documentElement.clientHeight
      + window.scrollY >= document.documentElement.scrollHeight
      || document.documentElement.clientHeight
  },
}

