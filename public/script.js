/**
 * Created by ykha on 9/1/16.
 */
$(document).ready(function() {
    $("nav").fadeIn();

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

    var canvas = $("#canvas")[0];
    var width = window.innerWidth;
    var height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext("2d");

    // snowflakes particles
    var max = 100; // max particles
    var particles = []; // array for particles

    for (var i = 0; i < max; i++) {
        particles.push({
            x : Math.random() * width,
            y : Math.random() * height,
            r : Math.random() * 3+1,
            d : Math.random(),
            dx: Math.random() * (Math.random() < 0.5 ? -1 : 1),
            dy: Math.random() * (Math.random() < 0.5 ? -1 : 1),
            blinking: 0.01 * (Math.random() < 0.5 ? -1 : 1)
        });
    }

    function draw() {

        context.clearRect(0, 0, width, height);

        for (var i = 0; i < max; i++) {
            context.beginPath();
            var p = particles[i];
            context.moveTo(p.x, p.y);
            context.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255,255,255," + p.d + ")";
            context.fill();
        }
        moving();

    }

    var angle = 0;

    function moving() {
        for (var i = 0; i < max; i++) {
            var p = particles[i];
            // update coords x and y
            p.y += p.dy;
            p.x += p.dx;
            p.d -= p.blinking;

            if (p.d < 0) {
                p.blinking = -0.01;
            } else if (p.d > 1) {
                p.blinking = 0.01;
            }

            // send flakes back to the top when it exits screen
            if (p.x > width + 10 || p.x < -10 || p.y > height || p.y < -10) {
                particles[i] = {x:Math.random() * width, y:-10, r : p.r, d : p.d};
            }
        }
    }

    // animation loop every 33ms
    setInterval(draw, 33);

    // let's go for the demo !!!
});