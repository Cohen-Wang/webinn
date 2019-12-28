

function show () {
    setTimeout(function () {
        console.log(1);
    })
}
show();// 先执行，后完毕

console.log(2);// 后执行，先完毕