# wz-work-utils
工作中经常用到的公共函数汇总！

> wz-work-utils 是一个小型 javascript 函数和类的集合，这些函数和类使开发过程变得更短、更容易。然而它绝不是一个完整的收藏，但它在过去为我服务了不少，再不断的优化中精简了我很多的重复开发。

## 🌲项目描述

`wz-work-utils` 是对常用函数的封装，其中包括string, array, function, object, browser, date, math, RegExp 等分类。

## 🎨使用方法

使用 npm 安装

```html
npm install wz-work-utils
```

## 🛠️使用例子

- 通过调用 `isArray()` 方法来判断数值是否为数组

```javascript
const js_utils = require('../index');
var arr = [];
var obj = {};
console.log(js_utils.isArray(arr));                   // true
console.log(js_utils.isArray(obj));                   // false
```

## ✒️项目目录

```js
├── bin                        # 入口文件
├── lib                        # 依赖文件
├── src                        # 工程目录
│   │── array-utils.js         # 数组相关
│   │── browser-utils.js       # 浏览器相关
│   │── date-utils.js          # 时间相关
│   │── doms-utils.js          # dom操作
│   │── func-utils.js          # 函数相关
│   │── math-utils.js          # 数学相关
│   │── object-utils.js        # 对象相关
│   │── string-utils.js        # 字符串相关
│   │── type-utils.js          # 类型判别相关
│   └── regexp-utils.js        # 正则相关
├── test                       # 工程目录
├── package.json               # package.json
└── RREADME.md                 # 用户自定义配置文件
```

## 🚚参考资料

感谢原作者分享了大量有用的 javascript 函数思路。
> 源项目：[https://github.com/Chalarangelo/30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code)
