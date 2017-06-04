/*alert("Hello Javascript")*/

/*window.addEventListener("DOMContentLoaded", function(){
    document.getElementById('btn').addEventListener("click",function(){
        a = document.getElementById('box_1').value;
        window.alert("Hello "+a);
    })
})*/


window.addEventListener("DOMContentLoaded", init);

function init(){
    a = document.getElementById('box_1');
    document.getElementById('btn').addEventListener("click",greet);
    document.getElementById('btn_2').addEventListener("click",blank_check);
}

function greet(){
    window.alert("Hello "+ a.value);
}

function blank_check(){
    if(a.value == ""){
        /*alert("You cannot leave this field blank");*/
        document.getElementById("error").innerHTML = "You cannot leave this field blank"
    }
    else {
        alert("Go Ahead");
    }
}