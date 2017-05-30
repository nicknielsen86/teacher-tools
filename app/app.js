'use strict';

// Declare app level module which depends on views, and components
angular.module('teacherTools', [
  'ngRoute',
  'navigationBar',
  'homePage'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {template: '<home-page></home-page>'})
    .otherwise('/');
}]);