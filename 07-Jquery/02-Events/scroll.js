$(document).ready(function(){

});

$(window).scroll(function(){
    var pos = $("#div_2").scrollTop();
    var height = $(window).height();
    /*if($("#div_2").scrollTop() < 300){
        console.log("Arrived");
    }*/
    div_2_pos = $("#div_2").offset().top;
    current_pos = div_2_pos - $(window).scrollTop();
    /*console.log("Current position is ",current_pos);*/

    if(current_pos < height - 500){
        console.log("Arrived");
        /*$(this).animate()*/
        $("#div_2").addClass("animate_element");

    }

})