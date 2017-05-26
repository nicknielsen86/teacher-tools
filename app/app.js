'use strict';

// Declare app level module which depends on views, and components
angular.module('teacherTools', [
  'ngRoute',
  'navigationBar',
  'homePage'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  var routs
  try{
    routs = getRouts();
  } catch(e) {
    console.log("Warning: function 'getRouts' does not exists")
    routs = []
  }
  $locationProvider.hashPrefix('!');

  for(var i = 0; i < routs.length; i++) {
    var rout = routs[i]
    $routeProvider.when(rout.path, {template: rout.template});
  }
  $routeProvider.otherwise('/');
}]);