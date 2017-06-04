window.addEventListener("DOMContentLoaded", init);

function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    c = document.getElementById("box_3");
    d = document.getElementById("box_4");
    e = document.getElementById("error_1");
    f = document.getElementById("error_3");

    a.addEventListener("blur", validate);
    b.addEventListener("blur", validate);
    c.addEventListener("keyup", confirm_pwd);
    d.addEventListener("keyup",email_validate);

    document.getElementById("btn").addEventListener("click",add);
}

function add(){

}

function validate(){
    if (a.value == ""){
        e.innerHTML = "Cannot leave this field blank";
    }
    else {
        e.innerHTML = "Proceed";
    }
}

function confirm_pwd(){
    if(b.value == c.value){
        f.innerHTML = "Password match";
        console.log("Executed");
    }
    else {
        f.innerHTML = "Password do not match";
        console.log("Executed");
    }
}

function email_validate(){

}