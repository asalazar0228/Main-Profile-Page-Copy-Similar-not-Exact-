'use strict';

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');

         $stateProvider
                 .state('home', {
                     url: '/about',
                     templateUrl: 'views/about.html'                 
                 })

                 .state('projects', {
                     url: '/projects',
                     templateUrl: 'views/projects.html'

                 })

                 .state('tutorials', {
                     url: '/tutorials',
                     template: 'views/tutorials.html'
                 })

                 .state('contact', {
                     url: '/contact',
                     templateUrl: 'views/contact.html',
                 });
        
});

routerApp.controller('repeatController', function($scope) {
  $scope.projects = [
    {
        name:'Study Assistant/ UDP Sockets', 
        image:'css/img/UDP Sockets.png',
        description:'This is a simple application using Qt and UDP sockets. Typically TCP would be used for these type of applications but since most of my applicaitons have always used TCP connections I wanted to just try UDP sockets. The biggest downfall to UDP connections is that there is no two-way handshake meaning that the data packets are not guaranteed to get through. Still UDP sockets are extremely reliable and since this application required each user to acknowledge their incoming message I thought it would be fine to do it this way. The purpose of this application is to increase effiency while studying with a another person. During efficient studying there are only 4 things that should be discussed between the two: encouragement, wake up signal, letting other know how much longer they wil study, and letting your friend know when you are done. Please note that I assuming you are studying for different subjects and it is aso assuming that you will stick to your own schedule and not deviate.',
        tech:' C++, Qt Signals and Slots, UDP Sockets, XML, HTML parser(Regular Expressions)',
        link:""
    },

    {
        name:'Morning Task Automater', 
        image:'css/img/Project 2.png',
        description: 'The goal of this script is to help automate morning tasks for people. This is my first version and has a couple great features. First and foremost, it operates through voice recognition so a built in or externa microphone is required. It can go to the slickdeals website parse out the titles and links and search through for a specific item. It will provide you with a list of iteams matching your criteria and then take you to whatever item page you would like to visit. Another feature allows you to have a note text file, add/ delete to it, and text you your notes through twilio. Towards the end of the script it checks your email and lists you your new emails and their subjects. I will slowly add new features. The point of this is to help people through their morning tasks and speed up their routine allowing them a little more time to the things they care about.',
        tech:' Python, Twilio API, Google Speech Recognition, OS speech, Beautiful Soup, (Insert email helper)',
        link:''
    },

    {
        name:'Personal Website', 
        image:'css/img/Project 3.png',
        description:'My Personal Website was made using the technologies below. I aimed at making this site very user friendly and intuitive so that the user would get the most out of it and have a positive experience. I hope this site helps others in some way. Maybe spark an idea in the reader who knows :) ',
        tech:' html, css, javascript, angular, bower, ui-router, j-query',
        link:''
    },

    {
        name:'Machine Learning Personal Interest/Research', 
        image:'css/img/Research.png',
        description:'Currently one of my biggeset personal interests is in Machine Learning, specifically in Neural Networks. I have a small simple implementation up to give some people an idea of how it works but in reality neural networks are really complicated. The math involved in many sophisticated neural network implemntations is very advanced which is why i find them so intriguing. The are meant to model the way actual neurons work in the human brain. A neural net is made up of inputs, processing of input and then outputs. Each of the connections between the nodes carries a weight which in turn affects the end result. In theory, if you are able to shift the weights enough you should be able to input information and have it processed in a way that accurately predicts the output. This is obviously a very simple implementation of them.',
        tech:' Torch, Lua, Luajit',
        link:''
    },

    {
        name:'Automating home with Raspberry Pi and multiple Arduinos (IN PROGRESS)', 
        image:'css/img/rasarduino.jpg',
        description:'This is someting I am currently working on. I would like to automate a little bit of my home for fun. I love playing with Arduinos and Raspberry Pis because of their versatility and power. Be on the lookout for some updates on this. I am connecting sensors and motors to the arduinos(each connected to a wifi module) to gather the information I need. This information will be sent to the raspberry pi which will act as a server.',
        tech:' C, Arduino, Raspberry Pi 3',
        link:''
    }

  ];
});



