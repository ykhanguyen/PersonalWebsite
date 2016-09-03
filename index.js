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
    res.render('home');
});

app.get('/about', function(req, res) {
   res.render('about', {menu: 'yeah'});
});

var data = {menu: 'yeah',
    projects: [
        {project: "Money Rain Multiplayer",
            image: "MoneyRain.png",
            website: "https://money-rain-application.herokuapp.com/",
            github: "https://github.com/ykhanguyen/MoneyRain",
            description: ""},
        {project: "Personal Webiste",
            image: "PersonalWebsite.png",
            website: "/",
            github: "https://github.com/ykhanguyen/PersonalWebsite",
            description: ""},
        {project: "US Citizen Quiz",
            image: "USCitizenTest.png",
            github: "https://github.com/ykhanguyen/USCitizenQuiz",
            website: "http://students.washington.edu/ykha/uscitizentest/",
            description: ""},
        {project: "Eng-Vi Dictionary",
            image:"Eng-ViDictionary.png",
            github: "https://github.com/uyvunk/Chrome-Extension---Translator",
            website: "https://chrome.google.com/webstore/detail/eng-vi-dictionary/nidobgjfikdhjkmdbpppjokehnnfcefb",
            description: ""},
        {project: "Escape the Cave",
            image: "EscapeTheCave.png",
            github: "https://github.com/ykhanguyen/EscapeTheCave",
            description: ""},
    ],};
app.get('/projects', function(req, res) {
    res.render('projects', data );
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate');
});
