$(document).ready(function(){

    // $('.segment1').click(function(){
    //     if ($('.segment1').attr('data-alt-src') === "img/cat0.png"){
    //         $('.segment1').attr('src', $('.segment1').attr('data-alt-src'));
    //         $('.segment1').attr("data-alt-src", "img/ninja0.png");
    //     }else {
    //         $('.segment1').attr('src', $('.segment1').attr('data-alt-src'));
    //         $('.segment1').attr("data-alt-src", "img/cat0.png");
    //     }
    // })
    $('.segment1').click(function(){
        if ($('.segment1').attr('data-alt-src') === "img/cat0.png"){
            $('.segment1').attr('src', $('.segment1').attr('data-alt-src'));
            $('.segment1').attr("data-alt-src", "img/Orkin-Trademark.png");
            $('.segment1').attr("alt-src2", "img/ninja0.png");
        }else 
            if($('.segment1').attr('data-alt-src') === "img/Orkin-Trademark.png"){
                console.log("YES");
            $('.segment1').attr('src', $('.segment1').attr('data-alt-src'))
            $('.segment1').attr('data-alt-src', "img/ninja0.png");
            $('.segment1').attr('alt-src2', "img/cat0.png");
        }else {
            $('.segment1').attr('src', $('.segment1').attr('data-alt-src'));
            $('.segment1').attr("data-alt-src", "img/cat0.png");
            $('.segment1').attr("alt-src2", "img/Orkin-Trademark.png");
        }
    })

    $('.segment2').click(function(){
        if ($('.segment2').attr('data-alt-src') === "img/cat1.png"){
            $('.segment2').attr('src', $('.segment2').attr('data-alt-src'));
            $('.segment2').attr("data-alt-src", "img/ninja1.png");
        }else {
            $('.segment2').attr('src', $('.segment2').attr('data-alt-src'));
            $('.segment2').attr("data-alt-src", "img/cat1.png");
        }
    })

    $('.segment3').click(function(){
        if ($('.segment3').attr('data-alt-src') === "img/cat2.png"){
            $('.segment3').attr('src', $('.segment3').attr('data-alt-src'));
            $('.segment3').attr("data-alt-src", "img/ninja2.png");
        }else {
            $('.segment3').attr('src', $('.segment3').attr('data-alt-src'));
            $('.segment3').attr("data-alt-src", "img/cat2.png");
        }
    })

    $('.segment4').click(function(){
        if ($('.segment4').attr('data-alt-src') === "img/cat3.png"){
            $('.segment4').attr('src', $('.segment4').attr('data-alt-src'));
            $('.segment4').attr("data-alt-src", "img/ninja3.png");
        }else {
            $('.segment4').attr('src', $('.segment4').attr('data-alt-src'));
            $('.segment4').attr("data-alt-src", "img/cat3.png");
        }
    })

    $('.segment5').click(function(){
        if ($('.segment5').attr('data-alt-src') === "img/cat4.png"){
            $('.segment5').attr('src', $('.segment5').attr('data-alt-src'));
            $('.segment5').attr("data-alt-src", "img/ninja4.png");
        }else {
            $('.segment5').attr('src', $('.segment5').attr('data-alt-src'));
            $('.segment5').attr("data-alt-src", "img/cat4.png");
        }
    })

})