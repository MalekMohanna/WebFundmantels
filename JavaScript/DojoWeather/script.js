function notif() {
    let x = document.querySelector(".cities").innerHTML;
    alert("Loading weather report..");
}

function removeco() {
    let y = document.querySelector("footer");
    y.remove();
}

function change(element) {
    var x = document.querySelectorAll(".high");
    var y = document.querySelectorAll(".low");
    console.log(element.value)
    if (element.value == "℃") {
        changeCtoF(x, y);
    }
    else {
        changeFtoC(x, y);
    }
}

function changeFtoC(x,y) {
    for (var i = 0; i < x.length; i++) {
        x[i].innerHTML = Math.round(parseInt(x[i].innerHTML) * (9 / 5) + 32);
    } 
    for (var j = 0; j < y.length; j++) {
        y[j].innerText = Math.round(parseInt(y[j].innerText) * (9 / 5) + 32);
    }
}


function changeCtoF(x,y) {
    for (var i = 0; i < x.length; i++) {
        x[i].innerHTML = Math.round(parseInt((x[i].innerHTML) - 32) * (5 / 9));
    } 
    for (var j = 0; j < y.length; j++) {
        y[j].innerText = Math.round(parseInt((x[j].innerHTML) - 32) * (5 / 9));
    }
}

