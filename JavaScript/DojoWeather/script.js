function notif(){
    let x=document.querySelector(".cities").innerHTML;
    alert("Loading weather report..");
}

function removeco(){
    let y=document.querySelector("footer");
    y.remove();
}

function change(){
    var x = document.querySelector(".measure").value;
    document.getElementById(".low").innerHTML = x*(9/5) + 32;
}