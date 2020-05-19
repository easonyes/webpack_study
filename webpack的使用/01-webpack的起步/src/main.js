const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30))
console.log(mul(20, 30))

// 依赖css文件
require('./css/normal.css')

// 引入less文件
require('./css/special.less')

document.writeln('<h2>嘻嘻</h2>')
