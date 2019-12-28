

window.onload = function () {
    ajax();
};

//
function ajax () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //
                let obj = JSON.parse(xhr.responseText);
                //
                document.getElementById('box').innerHTML += "<p>别人说:"+obj.content+"</p>";
                //
                let timer = window.setTimeout(function () {
                    ajax();
                }, 1000)
            }
        }
    };
    xhr.open('POST', './php/index.php', true);
    xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded;charset=UTF-8");
    xhr.send('action=send');
}