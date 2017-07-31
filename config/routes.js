app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    user: 'user'
}).config(function($routeProvider, USER_ROLES){
        $routeProvider
            .when("/home", {
                url: "/home",
                controller: "homeCtrl",
                templateUrl: "views/home.html",
		        access: {
		            loginRequired: true,
		            authorizedRoles: [USER_ROLES.all]
		        }
            }).when("/login", {
                url: "/login",
                controller: "loginCtrl",
                templateUrl: "views/login.html"
            })
            .otherwise({redirectTo:'/home'});

    }).run(function ($rootScope, $location,$cookies, $http, AuthSharedService, Session, USER_ROLES, $q, $timeout,LayouHomeService) {

    // $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

        console.log('Iniciando:');
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
        
    });