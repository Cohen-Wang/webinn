const { URL } = require('url');
const myURL = new URL('https://www.baidu.com/foo?abc#bar');
// 获取
console.log(myURL.hash);// 输出 #bar
// 设置
myURL.hash = 'baz';
console.log(myURL.href);// 输出 https://example.org/foo#baz


// 获取
console.log(myURL.host);// 输出 example.org:81
// 设置
myURL.host = 'example.com:82';
console.log(myURL.href);// 输出 https://example.com:82/foo


