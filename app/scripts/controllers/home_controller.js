/**
 * Created by smurf on 24/01/2014.
 */
(function(app){
    'use strict';
//    var app = angular.module('urApiVlApp');
    app.controller('HomeController', ['$scope','amplify',
        function ($scope, amplify) {
            $scope.loggedInUser = amplify.store("loggedInUser");
    }]);
})(app);
