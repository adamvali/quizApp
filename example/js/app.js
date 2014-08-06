'use strict';


// Declare app level module which depends on any thing
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'UserApp'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', login: true});
	$routeProvider.when('/signup', {templateUrl: 'partials/signup.html', public: true});
	$routeProvider.when('/verify-email', {templateUrl: 'partials/verify-email.html', verify_email: true});
	$routeProvider.when('/reset-password', {templateUrl: 'partials/reset-password.html', public: true});
	$routeProvider.when('/set-password', {templateUrl: 'partials/set-password.html', set_password: true});
	$routeProvider.when('/q1', {templateUrl: 'partials/q1.html', controller: 'MyCtrl1'});
	$routeProvider.when('/q2', {templateUrl: 'partials/q2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/q3', {templateUrl: 'partials/q3.html', controller: 'MyCtrl3'});
    $routeProvider.when('/q4', {templateUrl: 'partials/q4.html', controller: 'MyCtrl4'});
    $routeProvider.when('/q5', {templateUrl: 'partials/q5.html', controller: 'MyCtrl5'});
    $routeProvider.when('/q6', {templateUrl: 'partials/q6.html', controller: 'MyCtrl6'});
    $routeProvider.when('/result', {templateUrl: 'partials/viewResult.html', controller: 'resultCtrl'});
	$routeProvider.otherwise({redirectTo: '/q1'});
}])
.run(function($rootScope, user) {
	// Initiate the user service with your UserApp App Id
	// https://help.userapp.io/customer/portal/articles/1322336-how-do-i-find-my-app-id-
	user.init({ appId: '53e0fc41648d9' });
});
