const js_utils = require('../index');

console.log(js_utils.arrayChunk([1,2,3,4,5],2))

console.log(js_utils.arrayFilterFalse([0,false,null,undefined,"",1]))

console.log(js_utils.arrayCount([1,1,1,1,2],1))

console.log(js_utils.arrayDisassemble([[1,3,4,5],[2,3,[4,4,5]],1,1,2]))

console.log(js_utils.arrayZip([1,1,2,2,0,3,3],[1],[2]))