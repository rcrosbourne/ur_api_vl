/**
 * Created by smurf on 24/01/2014.
 */
(function(app){
    'use strict';
//    var app = angular.module('urApiVlApp');
    app.controller('HomeController', ['$location','$scope','amplify','userService',
        function ($location, $scope, amplify, userService) {
            //TODO Get the access token from store
            //send a request to get the current user and store that user in cache
           var currentUs =  userService.currentUser();
            currentUs.then(successFunction, failureFunction);
            function successFunction(response){
                $scope.currentUser = response.data;
            }
            function failureFunction(response){
                alert("Unable to retrieve user profile");
            }

//            $scope.loggedInUser = amplify.store("loggedInUser");
            $scope.logout = function(){
                //Remove saved user
                //Redirect to login page
                console.log("In Logout");
                amplify.store("access_token", null);
                $location.path("/");
            }
    }]);
})(app);
