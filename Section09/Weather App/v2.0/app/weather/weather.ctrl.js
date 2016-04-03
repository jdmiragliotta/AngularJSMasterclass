(function() {	
	angular.module("app.weather")
		.controller("Weather", function($scope, $routeParams, weatherSvc) {
			$scope.current = null;
			
			getCurrent();
			
			function getCurrent() {
				if ($routeParams.id !== undefined) {
					weatherSvc.getCurrent($routeParams.id)
						.then(
							function(response) {
								$scope.current = response;
								console.log($scope.current);
							},
							function(err) {
								console.log("Error loading current weather data: ", err);
							}
						)
				}
				
			}
		});
}());