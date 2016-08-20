$(document).foundation();

var app = angular.module('alphaqApp', ['ui.router']);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$stateProvider
		// .state('home', {
		// 	url: '',
		// 	controller: 'mainCtrl',
		// 	templateUrl: 'static/views/login.html'
		// })
		.state('error', {
			url: '/error',
			controller: 'errorCtrl',
			templateUrl: 'views/error.html',
		})
		.state('control', {
			url: '/control',
			controller: 'controlCtrl',
			templateUrl: 'views/control.html',
		});
	}]);

app.controller('mainCtrl', ['$scope','$state','$window',
							function($scope,$state,$window) {

    console.log('mainCtrl');

}]);


