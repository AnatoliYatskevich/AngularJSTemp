'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'view4/view4.html',
            controller: 'View4Ctrl',
            css: 'css/instantsearch.css'
        });

    }])

// Define a new module for our app. The array holds the names of dependencies if any.
//var app = angular.module("instantSearch", []);

// Create the instant search filter
.filter('searchFor', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result;
    };

})
.controller('View4Ctrl', function InstantSearchController($scope){

    // The data model. These items would normally be requested via AJAX,
    // but are hardcoded here for simplicity. See the next example for
    // tips on using AJAX.

    $scope.items = [
        {
            url: 'https://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'https://tutorialzine.com/media/2013/07/featured_4.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'https://tutorialzine.com/media/2013/08/simple_registration_system.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/08/slideout-footer-css/',
            title: 'Create a slide-out footer with this neat z-index trick',
            image: 'https://tutorialzine.com/media/2013/08/slide-out-footer.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/06/digital-clock/',
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'https://tutorialzine.com/media/2013/06/digital_clock.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/05/diagonal-fade-gallery/',
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'https://tutorialzine.com/media/2013/05/featured.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
            title: 'Mini AJAX File Upload Form',
            image: 'https://tutorialzine.com/media/2013/05/ajax-file-upload-form.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/04/services-chooser-backbone-js/',
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'https://tutorialzine.com/media/2013/04/service_chooser_form.jpg'
        }
    ];

});