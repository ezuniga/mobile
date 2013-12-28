$(document).bind("mobileinit", function () {
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
});

$(document).ready(function() {
    $("li").on("click", "a", function(event){
        var unit = $(this).attr('data-number');
        var name = $(this).attr('data-name');
        if ( unit !== undefined ){
            $.ajax({
                url: "http://api.mobile",
                datatype: "html",
                data: {
                    'number': unit
                },
                success: function (response) {
                    $('#unit-name').html(name);
                    $('#unit-content').html(response);
                    var math_element = document.getElementById("unit-content");
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, math_element]);
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }
    });
});
