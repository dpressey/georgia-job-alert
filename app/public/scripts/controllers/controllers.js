app.controller('JobSearchController', function ($scope, jobService){
		
		$scope.form = {
			city: '',
			desiredPosition: '',
			expectedExperience: '',
			expectedEducation: ''
		};	

		$scope.searchForJobs = function(isValid){

			if (isValid){
				jobService.getJobs( $scope.form );
			}
		};	
});