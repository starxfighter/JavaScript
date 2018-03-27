$(document).ready(function(){

    //.click
    
    $('.cbutton').click(function(){
        alert("This will put a message on a separate window when you click the button");
    })

     
    //.hide

    $('.hide').click(function(){
        $(".p_hide, .2").hide("slow");
    })

     
    //.show

    $('.show').click(function(){
        $('.p_hide').show("slow");
    })

     
    //.toggle

    $('.toggle').click(function(){
        $('.1').toggle('slow');
    })

     
    //.slideDown

    $('.slideDown').click(function(){
        $('.2').slideDown();
    })

     
    //.slideUp

    $('.slideUp').click(function(){
        $('.2').slideUp();
    })

     
    //.slideToggle

    $('.slideToggle').click(function(){
        $('.3').slideToggle("slow");
    })

     
    //.fadein

    $('.fadeIn').click(function(){
        $('.4').fadeIn('slow');
    })
     
    //.fadeOut

    $('.fadeOut').click(function(){
        $('.4').fadeOut('slow');
    })

     
    //.addClass

    $('.addClass').click(function(){
        $('.5').addClass('huge');
    })

     
    //.before

    $('.before').click(function(){
        $('.before').before($('.6'));
    })

     
    //.after

    $('.after').click(function(){
        $('.before').after($('.6'));
    })

     
    //.append

    $('.append').click(function(){
        $('.atext').append("Easter");
    })

     
    //.html

    $('.HTML').click(function(){
        $('h1').html("Adding a H1 tag");
    })

     
    //.attr

    var attribute = $('.attribute').attr('class');
    $('.attribute').click(function(){
        console.log(attribute);
    })

     
    //.val

    $('.value').click(function(){
        $('.input').val('Gold');
    })

     
    //.text

    $('.text').click(function(){
        $('.textParagraph').text("Round! Its not the 1600's!");
    })

     
    //.data

    $('.info').click(function(){
        $('.dataText').data('greeting',"Hello");
    });
    $('.info1').click(function(){
        $('.dataText').text($('.dataText').data('greeting'));
    });

     
});