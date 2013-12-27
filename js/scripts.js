// http://stackoverflow.com/questions/11952485/jquery-mobile-trying-to-get-remote-content-with-ajax

$(document).bind("mobileinit", function () {
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
});

$(document).ready(function() {
    $("li").on("click", "a", function(event){
        var unit = $(this).attr('data-name');
        if ( unit !== undefined ){
            $.ajax({
                url: "http://api.mobile",
                datatype: "html",
                data: {
                    'number': unit
                },
                success: function (response) {
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

/*
    $(document).bind("pagebeforechange", function (e, data) {
        alert(unit);
        if (typeof data.toPage === "string") {
            var u = $.mobile.path.parseUrl(data.toPage);
            var re = /^#unidad/;
            if (u.hash.search(re) !== -1) {
                $.ajax({
                    url: "http://api.mobile",
                    datatype: "html",
                    success: function (data) {
                        $('#unit-content').html(data);
                        var math = document.getElementById("unit-content");
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
            }
        }
    });*/
});
