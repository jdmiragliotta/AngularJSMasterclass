(function() {		angular.module("app.data")		.value("weatherSvcUrl", "http://api.openweathermap.org/data/2.5/")		.value("weatherImgUrl", "http://openweathermap.org/img/w/")		.value("countryFlagImgUrl", "http://openweathermap.org/images/flags/");	}());