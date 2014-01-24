'use strict';

var app = angular.module('urApiVlApp', ['ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
    .service('amplify',function(){
        return amplify
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
            .when('/home',{
                templateUrl: 'views/home.html',
                controller: "HomeController",
                resolve: {
                    factory: checkRouting //causes a redirect when user not logged in
                }
            })
            .otherwise({
          redirectTo: '/'
        });
      });


var checkRouting= function ($rootScope, $location, amplify) {
    if (amplify.store("loggedInUser")) {

        console.log(amplify.store("loggedInUser").name)
        return true;
    } else {
        $location.path("/");
        //return false;
//        var defered = $q.defer();
//        $http.post("/loadUserProfile", { userToken: "blah" })
//            .success(function (response) {
//                $rootScope.userProfile = response.userProfile;
//                defered.resolve(true);
//            })
//            .error(function () {
//                defered.reject();
//                $location.path("/");
//            });
//        return defered.promise;
    }
};