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
        "userService",["$http",
        function( $http ) {

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
            function firstRequest(){
                return $http({
                    method: 'POST',
                    url: 'http://localhost:3000/token',
                    headers: {
                        'X-Test': 'application/json'
                    },
                    params: {
                        username:'rainaldo@email.com',
                        password:'password'
                    }});
            }


//            // I get all of the categories.
//            function getCategories() {
//
//                var deferred = $q.defer();
//
//                deferred.resolve( ng.copy( cache ) );
//
//                return( deferred.promise );
//
//            }
//
//
//            // I get the category with the given ID.
//            function getCategoryByID( id ) {
//
//                var deferred = $q.defer();
//                var category = _.findWithProperty( cache, "id", id );
//
//                if ( category ) {
//
//                    deferred.resolve( ng.copy( category ) );
//
//                } else {
//
//                    deferred.reject();
//
//                }
//
//                return( deferred.promise );
//
//            }


            // ---------------------------------------------- //
            // ---------------------------------------------- //





            // ---------------------------------------------- //
            // ---------------------------------------------- //


            // Return the public API.
            return({
                login: login,
                firstRequest: firstRequest
//                getCategoryByID: getCategoryByID
            });


        }]
    );

})( app);