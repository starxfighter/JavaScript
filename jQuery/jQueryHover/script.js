$(document).ready(function(){
    $(".hover-change-img img").mouseenter(function(){       
        $(this).attr('src','storm.jpg');      
        $('h1').html("Cool Right!!!");
    });     
    $(".hover-change-img img").mouseleave(function(){       
        $(this).attr('src','lake_bubbles.jpg');
        $('h1').fadeOut('slow');  
        $('h1').css('display', 'inline-block');    
    }); 

})