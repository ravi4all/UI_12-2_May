window.addEventListener("load", init);

var a = null;
var b = null;
var c = 0;
function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click",do_calc);
    }
    /*document.getElementById("butn_1").addEventListener("click", add);
    document.getElementById("butn_2").addEventListener("click", sub);
    document.getElementById("butn_3").addEventListener("click", div);
    document.getElementById("butn_4").addEventListener("click", mul);*/
}

function do_calc(event){
    button_value = event.srcElement.value;
    console.log(button_value);

    var span = document.getElementsByTagName("span");
    /*console.log(span);*/

    var opr = parseInt(a.value) + button_value + parseInt(b.value);

    var expression = eval(opr);
    span[0].innerHTML = expression;


    /*if(button_value == "+"){
        c = parseInt(a.value) + parseInt(b.value);
        span[0].innerHTML = c;
    }
    else if(button_value == "-"){
        c = parseInt(a.value) - parseInt(b.value);
        span[0].innerHTML = c;
    }*/
}


/*
function add(){
    c = parseInt(a.value) + parseInt(b.value);
    print_result();
}
function sub(){
    c = parseInt(a.value) - parseInt(b.value);
    print_result();
}
function div(){
    c = parseInt(a.value) / parseInt(b.value);
    print_result();
}
function mul(){
    c = parseInt(a.value) * parseInt(b.value);
    print_result();
}

function print_result(){
    document.getElementById("result").innerHTML = c;
}*/
