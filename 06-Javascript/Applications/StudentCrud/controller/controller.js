window.addEventListener("DOMContentLoaded", init);

var name;
var mail;
var mobile;
function init(){
    s_name = document.getElementById("box_1");
    mail = document.getElementById("box_2");
    mobile = document.getElementById("box_3");
    document.getElementById("add").addEventListener("click", addStudent);
    document.getElementById("delete").addEventListener("click", deleteStudent);
}

function addStudent(){
    var ul = document.getElementById("studentList");
    var li = document.createElement("li");
    /*console.log(s_name.value);*/
    stud_obj.addStudent(s_name.value,mail.value,mobile.value);
    li.innerHTML = stud_obj.id + " " + s_name.value + " " + mail.value + " "+ mobile.value;
    ul.appendChild(li);

    li.addEventListener("click", markStudent);
}

function markStudent(event){
    event.srcElement.classList.toggle("marked");
    var currentStudent = event.srcElement.innerHTML.split(" ")[0];
    stud_obj.toggleStudent(currentStudent)
}

function deleteStudent(){
    stud_obj.deleteStudent()
    printStudent()
}

function printStudent(){
    var ul = document.getElementById("studentList");
    ul.innerHTML = "";
    stud_obj.studentList.forEach(function(stud_obj){
        li = document.createElement("li");
        li.innerHTML = stud_obj.id + " " + stud_obj.name + " " + stud_obj.email + " " + stud_obj.num;
        ul.appendChild(li);
        li.addEventListener("click", markStudent);
    })
}