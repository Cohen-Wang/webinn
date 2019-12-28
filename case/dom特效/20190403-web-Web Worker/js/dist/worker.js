


let i = 0;
postMessage(i);
let timer = setInterval(function () {
    i++;
    //postMessage(vm);// error
    //postMessage(this);// error
    //postMessage(window);// error
    postMessage(i);
}, 1000);