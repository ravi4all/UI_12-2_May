var stud_obj = {
    id : 0,
    studentList:  [],

    addStudent : function(name, email, num){
        this.id++;
        var obj = new Student(this.id, name, email, num);
        this.studentList.push(obj);
        /*console.log(stud_obj.studentList);*/
    },
    toggleStudent : function(id){
        var studentList = this.studentList.filter(function(stud_obj){
            return stud_obj.id == id;
        });
        studentList[0].selected = !studentList[0].selected;
        console.log("New Student List",studentList);

    },
    deleteStudent : function(){
        this.studentList =  this.studentList.filter(function(stud_obj){
            return stud_obj.selected == false;
        })
    }
}