/**
 * Created by smurf on 24/01/2014.
 */
(function(app){
    'use strict';
//    var app = angular.module('urApiVlApp');
    app.controller('HomeController', ['$location','$scope','amplify',
        function ($location, $scope, amplify) {
            $scope.loggedInUser = amplify.store("loggedInUser");
            $scope.logout = function(){
                //Remove saved user
                //Redirect to login page
                console.log("In Logout");
                amplify.store("loggedInUser", null);
                $location.path("/");
            }
    }]);
})(app);
