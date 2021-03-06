﻿(function () {
    angular.module("app.data")
        .factory("weatherSvc", function ($http, $q, weatherImgUrl, weatherSvcUrl, countryFlagImgUrl) {
            return {
                find: findByLocation,
                getCurrent: getCurrentWeather,
                getForecast: getForecast,
                getWeatherImgUrl: getWeatherImgUrl,
                getCountryFlagImgUrl: getCountryFlagImgUrl,
                kelvinToDegree: kelvinToDegree,
                getTime: getTime,
            }

            function findByLocation(location) {
                var url = weatherSvcUrl + "find?q=" + location;

                var defer = $q.defer();

                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            function getCurrentWeather(id) {
                var defer = $q.defer();

                var url = weatherSvcUrl + "weather?id=" + id;

                $http.get(url)
                    .success(function(response) {
                        defer.resolve(response);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            function getForecast(id) {
                var defer = $q.defer();

                var url = weatherSvcUrl + "forecast/daily?id=" + id;

                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            function getWeatherImgUrl(imgStr) {
                return weatherImgUrl + imgStr + ".png";
            }

            function getCountryFlagImgUrl(imgStr) {
                return countryFlagImgUrl + imgStr.toLowerCase() + ".png";
            }

            function kelvinToDegree(temp) {
                return temp - 273.15;
            }

            function getTime(dt) {
                return new Date(dt * 1000);
            }
        });
}());