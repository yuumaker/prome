$(document).ready(function(){

    
    $(".page_home").hide();
    $(".closedoor").hover(function(){
        $(".closedoor").css("opacity", 0 );
        $(".opendoor").css("opacity", 1 );
        
        
    },function(){
        $(".closedoor").css("opacity", 1 );
        $(".opendoor").css("opacity", 0 );
        
    });

    $(".closedoor").click(function(){
       window.location.href='index_home.html';
    });

    

    //$('.closedoor').hide();
    //$("p").hide();
    //$('p').css('color','red');
    
});



