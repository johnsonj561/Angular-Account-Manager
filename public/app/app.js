var app = angular.module('nlApp', ['ngRoute', 'app.controller.main', 'app.service.auth', 'app.service.user',
  'app.directives.auth.login', 'app.directives.menu.home', 'app.directives.user.edit', 'app.directives.user.register']);

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
      templateUrl: 'app/views/pages/home.html'
    })

    // Login Route
    .when('/login', {
      templateUrl: 'app/views/pages/login-user.html'
    })

    .when('/register', {
      templateUrl: 'app/views/pages/register-user.html'
    })

    // an example route that requires authentication
    // un-authenticated users should not be able to view edit profile page
    .when('/edit-profile', {
      templateUrl: 'app/views/pages/edit-user.html',
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
