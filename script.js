var userName = document.querySelector("#myName");

var todd = document.querySelector(".toddContainer")
var phil = document.querySelector(".philContainer")


function changeName(){
    userName.innerHTML = "BOB";
}

function accept1(){
todd.remove();
}

function decline1(){
    todd.remove();
}

function accept2(){
    phil.remove();
    }
    
    function decline2(){
        phil.remove();
    }