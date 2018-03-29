$(document).ready(
    function(){
        $('.add-row').click(
            function(){
                var fname = $('#first_name').val();
                var lname = $('#last_name').val();
                var desc = $('#description').val();
                var newdiv = '<div class="id"><h3>' + fname + ' ' + lname + '</h3><h2>' + desc + '</h2><h4>Click for description</h4></div>';
                $(".container").append(newdiv);
                $(".container h2").css('display', 'none');
            }
        )
    $(document).on('click', '.id', function(){
        $(this).children('h3').hide();
        $(this).children('h4').hide();
        $(this).children('h2').css('display', 'inline-block');
    })
})
