$(document).bind("mobileinit", function () {
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
});

var gaPlugin;

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(successHandler, errorHandler, "UA-11657726-10", 10);
}

$(document).ready(function() {
    $("#exit").on("click", function(){
        navigator.app.exitApp();
    });
    $("a[data-rel='back']").on("click", function(){
        $('#unit-content').empty();
    });
    $("li").on("click", "a", function(event){
        var unit = $(this).attr("data-number");
        var name = $(this).attr("data-name");
        var href = $(this).attr("href");
        if ( href == "#unidad" ){
            $.ajax({
                url: "http://api-sangakoo.rhcloud.com/api/v1/",
                //url: "http://api.mobile/php/api/v1/",
                datatype: "html",
                data: {
                    "number": unit
                },
                success: function (response) {
                    $("#unit-name").html(name);
                    $("#unit-content").html(response);
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