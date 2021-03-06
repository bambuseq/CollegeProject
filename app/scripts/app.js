'use strict';

/**
 * @ngdoc overview
 * @name collegeProjectApp
 * @description
 * # collegeProjectApp
 *
 * Main module of the application.
 */
angular
  .module('collegeProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tools',{
        templateUrl: 'views/tools.html',
        controller: 'toolsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
