function removing(){
    const element = document.querySelector(".card-list-item");
    element.remove();
    }

    function reducen(){
        var x=document.querySelector(".badge");
        x.innerHTML=(parseInt(x.innerHTML))-(1);
    }

    function increasen(){
        var x=document.querySelector("#cnn");
        x.innerHTML=(parseInt(x.innerHTML))+(1);
    }

function namechange(){
    const element = document.querySelector(".the-name");
    element.innerHTML="Maia Collins";
}