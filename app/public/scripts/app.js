var app = angular.module('job-alert', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/job_search.html',
				controller: 'JobSearchController'
			}).
			otherwise({
				redirectTo: '/'
			});

		// Use the HTML5 History API
		//$locationProvider.html5Mode(true);		
	}
]);