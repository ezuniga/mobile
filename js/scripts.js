$(document).bind("mobileinit", function () {
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
});

$(document).ready(function() {
        alert('entro');
    $("li").on("click", "a", function(event){
        var unit = $(this).attr('data-number');
        console.log(unit);
        var name = $(this).attr('data-name');
        console.log(name);
        var href = $(this).attr('href');
        if ( href == '#unidad' ){
            $.ajax({
                //url: "http://api-sangakoo.rhcloud.com/",
                url: "http://api.mobile/php/api/v1/",
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
            //$('#unit-name').html(name);
            //$('#unit-content').html('Arnau tita petita 8==D');
        }
    });
});
