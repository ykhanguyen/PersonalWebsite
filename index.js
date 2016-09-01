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
        {project: "Personal Webiste",
            image: "PersonalWebsite.png",
            github: "kylenguyen.xyz",
            website: "https://github.com/ykhanguyen/PersonalWebsite",
            description: ""},
        {project: "US Citizen Test",
            image: "USCitizenTest.png",
            github: "http://students.washington.edu/ykha/uscitizentest/",
            website: "",
            description: ""},
        {project: "Eng-Vi Dictionary",
            image:"Eng-ViDictionary.png",
            github: "",
            website: "",
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
