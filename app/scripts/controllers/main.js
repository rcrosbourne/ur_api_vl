(function(app){
    'use strict';
//    var app = angular.module('urApiVlApp');
    app.controller('MainCtrl', ['$location', '$rootScope', '$scope','amplify','userService',
        function ($location, $rootScope, $scope, amplify, userService) {

            $scope.login = function (username, password){
                //TODO add userService login function
                //TODO add login function from scope to view.
                console.log(username + ':' + password);
                var firstRequest = userService.firstRequest(username, password);
                firstRequest.then(successRequest, failureRequest);
                function successRequest (response){
                    console.log(response);

                    //store the request data in cache.
                    amplify.store("access_token", response.data);
                    $location.path("/home");
                }
                function failureRequest(response){
                    console.error(response);
                    alert("Incorrect Username/Password: " + response.data.error );
                }
            };
        }]);
})(app);
