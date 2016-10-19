/**
 * Created by ykha on 8/31/16.
 */
var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});


app.engine('handlebars', handlebars.engine);


app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 5556);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home', {bg: 'yeah', home: 'yeah'});
});

app.get('/about', function(req, res) {
   res.render('about', {menu: 'yeah', about: 'yeah'});
});

var data = {menu: 'yeah',
    projects: [
        {project: "Moody Up",
            image: "moodyup.png",
            website: "https://devpost.com/software/moody-up",
            github: "https://github.com/ykhanguyen/Moody-Up",
            date: "October 2016 - Time spent: ~12 hours",
            skills: "Node.js",
            description: "The app to cheer users up by analyzing all your Facebook's posts and pictures.",
            team: "Kyle Nguyen, Minh Hoang"
        },
        {project: "TodoList and Time Track",
            image: "TodoListAndTimeTrack.png",
            website: "https://youtu.be/Sbi5Yw_ZkcQ",
            github: "https://github.com/ykhanguyen/TodoListAndTimeTrack",
            date: "September 2016 - Time spent: ~20 hours",
            skills: "jQuery, JS, Html, CSS",
            description: "This is Google Chrome Extension's Todo list app. It keeps track of the time of each task.",
            team: "Kyle Nguyen"
        },
        {project: "Money Rain Multiplayer",
            image: "MoneyRain.png",
            website: "https://money-rain-application.herokuapp.com/",
            github: "https://github.com/ykhanguyen/MoneyRain",
            date: "September 2016 - Time Spent: ~7 hours",
            skills: "Node.js Express, Socket.io, jQuery, Html, CSS",
            description: "This game's goal is to strengthen players' memorization and reaction.",
            team: "Kyle Nguyen"},
        {project: "Personal Webiste",
            image: "PersonalWebsite.png",
            website: "/",
            date: "September 2016 - Time Spent: ~15 hours",
            github: "https://github.com/ykhanguyen/PersonalWebsite",
            skills: "jQuery, JS, Node.js Express, Handlebars, Html, CSS",
            description: "This is my personal website where I share my tiny world to everybody",
            team: "Kyle Nguyen"},
        {project: "US Citizen Quiz",
            image: "USCitizenTest.png",
            date: "August 2016 - Time Spent: ~20 hours",
            github: "https://github.com/ykhanguyen/USCitizenQuiz",
            website: "http://students.washington.edu/ykha/uscitizentest/",
            skills: "jQuery, Php, Ajax, SQL",
            description: "This is 100 questions of US Citizenship Test which can be displayed in " +
            "English or Vietnamese. The goal of this project is to help Vietnamese easily prepare for this test!",
            team: "Kyle Nguyen, Quyen Truong"},
        {project: "Eng-Vi Dictionary",
            image:"Eng-ViDictionary.png",
            date: "June 2016 - Time Spent: ~13 hours",
            skills: "jQuery, Ajax",
            github: "https://github.com/uyvunk/Chrome-Extension---Translator",
            website: "https://chrome.google.com/webstore/detail/eng-vi-dictionary/nidobgjfikdhjkmdbpppjokehnnfcefb",
            description: "This is the Google Chrome extension that translate a word from English to Vietnamese by a double click." +
            "This also contains audio and pronunciation on a movable pop-up window to help people improve their English speaking skill.",
            team: "Kyle Nguyen, Vu Nguyen, Khanh Tran"},
        {project: "Escape the Cave",
            image: "EscapeTheCave.png",
            skills: "SFML, C++",
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

var experience_data = {
    menu: 'yeah',
    experience: 'yeah',
    jobs: [
        {
          title: 'Project Practicum, Dr. Anat Caspi, University of Washington',
            date: 'April 2016 – July 2016',
            description: ['Created a plugin for the OSREAD (Open Source Reading Education Assessment & Diagnosis) in Grails ' +
            'where researchers can assign assessment of voice and images for their patients as ' +
            'a JSON file and view the progress as a .CSV file.',
            'Created the server to input images and audios in Php.',
            'Trained Prosody with new words and aligned Children’s data through TextGrid files.']
        },
        {
            title: 'Undergraduate Researcher, Human Centered Robotic Lab, University of Washington',
            date: 'April 2016 – June 2016',
            description: ['Learned about ROS - Robot Operating System.',
                'Created a node that subscribes to an image topic of the PR2 robot ' +
                'and published a black and white version of that image.']
        },
        {
          title: 'Computer Science Tutor, Tutoring Center, Highline College',
            date: 'January 2015 – August 2015 ',
            description: ['Tutored students for Java assignments.',
            'Answered questions about class lectures for approximate 60 students in Computer Programming I/II ' +
            '(CSCI 142/ CSCI143) classes.']
        },
        {
          title: 'Application Tester, Lionbridge Technologies Inc, Microsoft',
            date: 'March 2015 - May 2015',
            description: ['Tested mobile applications submitted to the Window Store.']
        },
        {
            title: 'Math Tutor, Math Resource Center, Highline College',
            date: 'September 2014 – February 2015',
            description: ['Tutored students for all Calculus classes.', 'Made a calculator work shop to introduce ' +
            'how to use the calculator. (02/2015)', 'Class visits to introduce ' +
            'about Math Resource Center to colleagues.']
        },
        {
          title:'Teaching Assistant, Internship, Prof. Josh Archer, Computer Programming II (CSCI 143), Highline College',
            date: 'September 2014 – Dec 2014',
            description: ['Graded homework for over 30 students', 'Held office hours every week to tutor students.']
        },
        {
          title: 'Assistant, Volunteer, Tech "Acodemy" Summer Camp, Highline College',
            date: 'August 2014',
            description: ['Helped ~30 high school students become acquainted with codes in Arduino, Java and Web Development.',
            'Solved non-compile codes.',
            'Answered questions in class.',
            ]
        },
        {
            title: 'Office Assistant, Campus Safety Office, Highline College',
            date: 'March 2014- June 2014',
            description: ['Rearranged parking tickets.',
                'Used software to store parking permits and parking tickets.',
                'Answered calls to Highline College’s campus safety.']
        },
        {
            title: 'Cable Assembler, Carlisle Interconnect Technologies',
            date: 'May-2013 – March 2014',
            description: ["Cable lacing.", "Built connectors for airplane's cable (strip/crimp/label)"]
        }
    ]
};
app.get('/experience', function(req, res) {
    res.render('experience', experience_data);
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate');
});
