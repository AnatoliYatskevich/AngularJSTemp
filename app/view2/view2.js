'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    css: 'inlineeditor.css'
  });
}])

.controller('View2Ctrl', function InlineEditorController($scope){

  $scope.newItem={};
  $scope.value='T';

  // $scope is a special object that makes
  // its properties available to the view as
  // variables. Here we set some default values:

  $scope.showtooltip = false;
  $scope.value = 'Edit me.';

  // Some helper functions that will be
  // available in the angular declarations

  $scope.hideTooltip = function(){

    // When a model is changed, the view will be automatically
    // updated by by AngularJS. In this case it will hide the tooltip.

    $scope.showtooltip = false;
  }

  $scope.toggleTooltip = function(e){
    e.stopPropagation();
    $scope.showtooltip = !$scope.showtooltip;
  }
});