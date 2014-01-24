(function(app){
    'use strict';
//    var app = angular.module('urApiVlApp');
    app.controller('MainCtrl', ['$location', '$rootScope', '$scope','amplify','userService',
        function ($location, $rootScope, $scope, amplify, userService) {
            $scope.awesomeThings = [
                'My Time Now'
              ];
            $scope.login = function (username, password){
                //TODO add userService login function
                //TODO add login function from scope to view.
                console.log(username + ':' + password);
                var authenticated = userService.login(username, password);
                if (authenticated.id != null) {
                    console.log("User authenticated" + authenticated);
                    //Add to amplify
                    amplify.store( "loggedInUser", authenticated );

                    $rootScope.loggedInUser = authenticated;
                    $location.path("/home");
                }  else {
                    console.log("User Not authenticated");
                }
            
          };
    }]);

  })(app);
