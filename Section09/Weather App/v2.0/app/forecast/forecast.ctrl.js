(function() {	
	angular.module("app.forecast")
		.controller("Forecast", function($scope, $routeParams, weatherSvc) {
			$scope.forecast = null;
			
			getForecast();
			
			function getForecast() {
				if ($routeParams.id !== undefined) {
					weatherSvc.getForecast($routeParams.id)
						.then(
							function(response) {
								$scope.forecast = response;
							},
							function(err) {
								console.log("Error loading forecast data: ", err);
							}
						)
				}
				
			}
		});
}());