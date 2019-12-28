


vm.sharedWorker.port.postMessage(i);
let timer = setInterval(function () {
    i++;
    vm.sharedWorker.port.postMessage(i);
}, 1000);