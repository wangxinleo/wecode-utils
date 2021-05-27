module.exports = {

	/**
	 * 清除字符串左侧或右侧的任意空格
	 * @param {*} str 
	 * @returns 
	 */
	trim: function (str) {
		return str.replace(/^\s+|\s+$/g, "");
	},

	/**
	 * 清除左空格
	 * @param {*} str 
	 * @returns 
	 */
	ltrim: function (str) {
		return str.replace(/^\s+/, "");
	},

	/**
	 * 清除右空格
	 * @param {*} val 
	 * @returns 
	 */
	rtrim: function (val) {
		return val.replace(/\s+$/, "");
	},

	/**
	 * 只返回字符串a-z字符
	 * @param {*} str 
	 * @returns 
	 */
	onlyLetters: function (str) {
		return str.toLowerCase().replace(/[^a-z]/g, "");
	},

	/**
	 * 只返回字符串中a-z和数字
	 * @param {*} str 
	 * @returns 
	 */
	onlyLettersNums: function (str) {
		return str.toLowerCase().replace(/[^a-z,0-9]/g, "");
	},

	/**
	 * 将一长串字符串的第一个字母大写
	 * @param {*} param0 
	 * @param {*} lowerRest 
	 * @returns 
	 */
	capitalize: ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join("").toLowerCase() : rest.join("")),

	/**
	 * 将字符串中每个单词的首字母大写
	 * @param {*} str 
	 * @returns 
	 */
	capitalizeEveryWord: str => str.replace(/\b[a-z]/g, char => char.toUpperCase()),

	/**
	 * 从驼峰表示法转换为字符串形式
	 * @param {*} str 
	 * @param {*} separator 
	 * @returns 
	 */
	fromCamelCase: (str, separator = "_") => str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase(),

	/**
	 * 反转字符串
	 * @param {*} str 
	 * @returns 
	 */
	reverseString: str => [...str].reverse().join(""),

	/**
	 * 按字母顺序对字符串中的字符进行排序
	 * @param {*} str 
	 * @returns 
	 */
	sortCharactersInString: str => str.split("").sort((a, b) => a.localeCompare(b)).join(""),

	/**
	 * 字符串转换为驼峰模式
	 * @param {*} str 
	 * @returns 
	 */
	toCamelCase: str => str.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2, offset) => p2 ? p2.toUpperCase() : p1.toLowerCase()),

	/**
	 * 将字符串截断为指定长度
	 * @param {*} str 
	 * @param {*} num 
	 * @returns 
	 */
	truncateString: (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str,

	/**
	 * 生成 UUID, 符合RFC4122版本4
	 * @returns 
	 */
	UUIDGenerator: () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)),

}