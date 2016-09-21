/**
 * Created by ykha on 9/1/16.
 */
$(document).ready(function() {
    $("nav").fadeIn();

    var elem = $("#hello");

    $("h1").animate({
        fontSize: "90px"
    });

    $(".about-button").click(function() {
       $(".about-button").css("color", "black");
        $(this).css("color", "cadetblue");
        $(".background-about").hide();
        $("#education").hide();
        $("#bg").hide();
        if ($(this).attr('id') == "background-button") {
            $(".background-about").fadeIn();
        } else if ($(this).attr('id') == "education-button") {
            $("#education").fadeIn();
        }
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

    $("#more-background").click(function() {
        $("#bg").fadeToggle();
    });
    var canvas = $("#canvas")[0];

    // copy right https://codepen.io/ruigewaard/pen/JHDdF/
    var width = window.innerWidth;
    var height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';


        var init = [];
        var maxParts = 200;
        for(var a = 0; a < maxParts; a++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: -4 + Math.random() * 4 + 2,
                ys: Math.random() * 10 + 10
            })
        }

        var particles = [];
        for(var b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for(var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            }
            move();
        }

        function move() {
            for(var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                }
            }
        }

        setInterval(draw, 30);

    }
});

// end copy



/*
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
            r : Math.random() * 4,
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
            //context.fillStyle = "rgba(" + (Math.random() * 255) + ","
             //   + (Math.random() * 255) + "," + (Math.random() * 255) + "," + p.d + ")";
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
            } else if (p.d >= 1) {
                p.blinking = 0.01;
            }

            // send flakes back to the top when it exits screen
            if (p.x > width + 10 || p.x < -10 || p.y > height || p.y < -10) {
                p.x = Math.random()*width;
                p.y = Math.random() * height;
            }
        }
    }

    // animation loop every 33ms
    setInterval(draw, 33);

    // let's go for the demo !!!
});

    */