/**
 * Created by ykha on 8/31/16.
 */
var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});


app.engine('handlebars', handlebars.engine);


app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3333);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home', {bg: 'yeah', home: 'yeah'});
});

app.get('/about', function(req, res) {
   res.render('about', {menu: 'yeah', about: 'yeah'});
});

var data = {menu: 'yeah',
    projects: [
        {project: "Money Rain Multiplayer",
            image: "MoneyRain.png",
            website: "https://money-rain-application.herokuapp.com/",
            github: "https://github.com/ykhanguyen/MoneyRain",
            date: "September 2016 - Time Spent: ~7 hours",
            skills: "Node.js Express, Socket.io, jQueryCSS, Html, CSS",
            description: "This game's goal is to strengthen players' memorization and reaction.",
            team: "Kyle Nguyen"},
        {project: "Personal Webiste",
            image: "PersonalWebsite.png",
            website: "/",
            date: "September 2016 - Time Spent: ~15 hours",
            github: "https://github.com/ykhanguyen/PersonalWebsite",
            skills: "jQuery, JS, Node.js Express, Handlebars, Html, CSS",
            description: "This is my personal website which I share my tiny world to everybody",
            team: "Kyle Nguyen"},
        {project: "US Citizen Quiz",
            image: "USCitizenTest.png",
            date: "August 2016 - Time Spent: ~20 hours",
            github: "https://github.com/ykhanguyen/USCitizenQuiz",
            website: "http://students.washington.edu/ykha/uscitizentest/",
            skills: "jQuery, Php, Ajax, SQL",
            description: "This is 100 questions of US Citizenship Test which can be displayed in " +
            "English or Vietnamese. The goal of this project is to help Vietnamese easy to prepare for this test!",
            team: "Kyle Nguyen, Quyen Truong"},
        {project: "Eng-Vi Dictionary",
            image:"Eng-ViDictionary.png",
            date: "June 2016 - Time Spent: ~13 hours",
            github: "https://github.com/uyvunk/Chrome-Extension---Translator",
            website: "https://chrome.google.com/webstore/detail/eng-vi-dictionary/nidobgjfikdhjkmdbpppjokehnnfcefb",
            description: "This is the Google Chrome extension that translate a word in English by a double click." +
            "This also contains audio and pronunciation on a movable pop-up window to help Vietnamese pratice speaking English.",
            team: "Kyle Nguyen, Vu Nguyen, Khanh Tran"},
        {project: "Escape the Cave",
            image: "EscapeTheCave.png",
            date: "April 2015 - Time Spent: ~10 hours",
            github: "https://github.com/ykhanguyen/EscapeTheCave",
            description: "This game's mission is that in the dark case where the dark is cover half of the screen. " +
            "Every milisecond, players will lose their health. They have to eat as much as potions and avoid poisons as possible.",
            team: "Kyle Nguyen"}
    ],}
    pj: "yeah";
app.get('/projects', function(req, res) {
    res.render('projects', data );
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate');
});
