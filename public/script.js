/**
 * Created by ykha on 9/1/16.
 */
$(document).ready(function() {
    $("nav").fadeIn(4000);

    var elem = $("#hello");

    $("h1").animate({
        fontSize: "70px"
    });

    setInterval(function() {
        var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        elem.css("color", newColor);
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }
    }, 500);

});