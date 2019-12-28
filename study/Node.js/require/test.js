console.log('test.js: 开始执行test.js');

function sum () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

exports.sum = sum;

console.log('test.js: 结束执行test.js');