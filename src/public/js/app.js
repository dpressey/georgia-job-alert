var app = angular.module('job-alert', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {
		

		// Use the HTML5 History API
		//$locationProvider.html5Mode(true);		
	}
]);