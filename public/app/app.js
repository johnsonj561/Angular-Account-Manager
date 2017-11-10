var app = angular.module('nlApp', ['ngRoute', 'app.controller.main', 'app.controller.registration', 'app.controller.login', 'app.controller.edit-profile', 'app.service.auth', 'app.service.user']);

/**
 * Configure front end routes
 */
app.config(function ($routeProvider, $locationProvider, $httpProvider) {

  /**
   * Configure front end routes/controllers
   */
  $routeProvider

    // Home Route    
    .when('/', {
      templateUrl: 'app/views/templates/home.html',
    })

    // Login Route
    .when('/login', {
      templateUrl: 'app/views/templates/login.html',
      controller: 'LoginController',
    })

    .when('/register', {
      templateUrl: 'app/views/templates/register.html',
      controller: 'RegistrationController'
    })

    // an example route that requires authentication
    // un-authenticated users should not be able to view edit profile page
    .when('/edit-profile', {
      templateUrl: 'app/views/templates/edit-profile.html',
      controller: 'EditProfileController',
      authenticated: true
    })

    // "catch all" to redirect to home page            
    .otherwise({
      redirectTo: '/'
    });


  /**
   * AuthInterceptors of app.services.auth added to httpProvider interceptors
   */
  $httpProvider.interceptors.push('AuthInterceptors');


  /**
   * Remove # from url
   */
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});


/**
 * Set up routeChangeStart event listener
 * On route change start, check if authentication is required
 * If authentication requirements not meant, redirect user to home page
 */
app.run(['$rootScope', 'AuthService', '$location', function ($rootScope, AuthService, $location) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route !== undefined && next.$$route.authenticated === true) {
      if (!AuthService.isLoggedIn()) {
        console.log('Not Authorized, redirecting to home');
        event.preventDefault();
        $location.path('/');
      }
    }
  })
}]);
