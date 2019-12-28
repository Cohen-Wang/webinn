








let timer = window.setInterval(function () {

    let d = new Date();

    document.getElementById('current_date').innerHTML = d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds();

}, 1000);

