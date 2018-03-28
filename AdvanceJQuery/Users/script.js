$(document).ready(
    function(){
        $('.add-row').click(
            function(){
                var fname = $('#first_name').val();
                var lname = $('#last_name').val();
                var email = $('#email').val();
                var cNum = $('#contactNum').val();
                var newrow = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td>" + cNum + "</td></tr>";
                console.log(fname);
                $("table tbody").append(newrow);
            }
        )

}
)
