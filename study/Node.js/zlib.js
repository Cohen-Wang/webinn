const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip)
    .on('error', () => {
        // 处理错误
    })
    .pipe(out)
    .on('error', () => {
        // 处理错误
    });