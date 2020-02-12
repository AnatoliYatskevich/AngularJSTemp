'use strict';

angular.module('myApp.components', ['ngRoute', 'componentstabs'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/components', {
            templateUrl: 'components/components.html',
            controller: 'ComponentsCtrl',
            //css: 'components.css'
        });

    }])

.controller('ComponentsCtrl', function($scope, $locale) {
    $scope.beers = [0, 1, 2, 3, 4, 5, 6];
    if ($locale.id == 'en-us') {
        $scope.beerForms = {
            0: 'no beers',
            one: '{} beer',
            other: '{} beers'
        };
    }   else {
        $scope.beerForms = {
            0: 'žiadne pivo',
            one: '{} pivo',
            few: '{} pivá',
            other: '{} pív'
        };
    }
});