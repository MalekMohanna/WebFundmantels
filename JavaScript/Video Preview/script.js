function player(element){
    element.play();
    element.muted=true;
}

function off1(element){
    element.pause();
}

function whenclicked(element){
    element.muted=false;
    element.pause();
}