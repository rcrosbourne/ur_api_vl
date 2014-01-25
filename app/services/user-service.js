/**
 * Created by smurf on 24/01/2014.
 */
(function(app ) {

    "use strict";

    // I provide a repository for the users.
    // Set up the categories data cache. For this demo, we'll just use static data.
    var cache = [
        {
            id: "1",
            name: "Rainaldo Crosbourne",
            email: "rainaldo@email.com",
            password: "password"
        },
        {
            id: "2",
            name: "Clive Francis",
            email: "clive@email.com",
            password: "password"
        },
        {
            id: "3",
            name: "Yacira Francis",
            email: "yacira@email.com",
            password: "password"
        },
        {
            id: "4",
            name: "Dmitre Francis",
            email: "dmitre@email.com",
            password: "password"
        }
    ];
    app.service(
        'userService',['$location', '$http', 'amplify',
        function( $location, $http, amplify ) {

            function login(email, password){
                var user = {};
                for(var i = 0; i < cache.length; i++){
                    if (cache[i].email == email && cache[i].password == password){
                        user = cache[i];
                        break;
                    }
                }
                return user;
            }
            function firstRequest(username, password){
                return $http({
                    method: 'POST',
                    url: 'http://localhost:3000/token',
                    headers: {

                        'Content-Type': 'application/json'
                    },
                    params: {
                        username: username,
                        password: password
                    }});
            }
            function currentUser(){
//                if(canSendRequest){
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:3000/users/current_user',
                        headers: {

                            'Authorization': 'Bearer ' + amplify.store("access_token").access_token
                        }});

//                }else{
//                    //Redirect to login
//                    $location.path('/');
//                }
            }
            function canSendRequest(){
                return amplify.store("access_token").access_token != null ? true : false;

            }

            return({
                login: login,
                firstRequest: firstRequest,
                currentUser: currentUser
//                getCategoryByID: getCategoryByID
            });


        }]
    );

})( app);