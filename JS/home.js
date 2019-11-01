$(document).ready(function(){

    

    $(".menu").hover(function(){
        $(".menu_text").css("color", 'rgb(116, 116, 116)' );
        $(".line1").css("background-color", 'rgb(116, 116, 116)' );
        $(".line2").css("background-color", 'rgb(116, 116, 116)' );
        
        
    },function(){
        $(".menu_text").css("color", 'white' );
        $(".line1").css("background-color", 'white' );
        $(".line2").css("background-color", 'white' );
        
    });

    $("#pat1").hover(function(){
        $('#pat1').css("background-color", "black");  
    },function(){
        $('#pat1').css("background-color", "white");       
    });
    $("#pat2").hover(function(){
        $('#pat2').css("background-color", "black");  
    },function(){
        $('#pat2').css("background-color", "white");       
    });
    $("#pat3").hover(function(){
        $('#pat3').css("background-color", "black");  
    },function(){
        $('#pat3').css("background-color", "white");       
    });
    $("#pat4").hover(function(){
        $('#pat4').css("background-color", "black");  
    },function(){
        $('#pat4').css("background-color", "white");       
    });

    $("#right_t1").hover(function(){
        $('#right_line1').css("display", "block");  
    },function(){
        $('#right_line1').css("display", "none");     
    });
    $("#right_t2").hover(function(){
        $('#right_line2').css("display", "block");  
    },function(){
        $('#right_line2').css("display", "none");     
    });
    $("#right_t3").hover(function(){
        $('#right_line3').css("display", "block");  
    },function(){
        $('#right_line3').css("display", "none");     
    });
    $("#right_t4").hover(function(){
        $('#right_line4').css("display", "block");  
    },function(){
        $('#right_line4').css("display", "none");     
    });
    $("#right_t5").hover(function(){
        $('#right_line5').css("display", "block");  
    },function(){
        $('#right_line5').css("display", "none");     
    });


    
    

    /*$(".right_textli").hover(function(){
        $(this).css("text-decoration", "line-through");  
    },function(){
        $(this).css("text-decoration", "none");       
    });
    
    $("#right_t1").hover(function(){
        $('#right_line1').css("display", "block");  
    },function(){
        $('#right_line1').css("display", "none");     
    });
    
    
    
    */


    

    //$('.closedoor').hide();
    //$("p").hide();
    //$('p').css('color','red');
    // right_textli
    
});





