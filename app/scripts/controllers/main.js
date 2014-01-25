(function(app){
    'use strict';
//    var app = angular.module('urApiVlApp');
    app.controller('MainCtrl', ['$location', '$rootScope', '$scope','amplify','userService',
        function ($location, $rootScope, $scope, amplify, userService) {
            $scope.awesomeThings = [
                'My Time Now'
              ];
            var response = userService.firstRequest();

            $scope.login = function (username, password){
                //TODO add userService login function
                //TODO add login function from scope to view.
                console.log(username + ':' + password);
                var firstRequest = userService.firstRequest(username, password);
                firstRequest.then(successRequest, failureRequest);
                function successRequest (response){
                    console.log(response);
                    $scope.response = response.data;
                }
                function failureRequest(response){
                    console.log(response);
                    $scope.response = response.data;
                }
//                var authenticated = userService.login(username, password);
//                if (authenticated.id != null) {
//                    console.log("User authenticated" + authenticated);
//                    //Add to amplify
//                    amplify.store( "loggedInUser", authenticated );
//
//                    $rootScope.loggedInUser = authenticated;
//                    $location.path("/home");
//                }  else {
//                    console.log("User Not authenticated");
//                }
            
          };
    }]);

  })(app);
