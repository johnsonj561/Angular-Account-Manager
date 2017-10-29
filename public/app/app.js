var app = angular.module('nlApp', ['ngRoute', 'app.controller.main', 'app.controller.registration', 'app.controller.login', 'app.service']);


app.config(function ($routeProvider, $locationProvider) {

  // define routeProvider routes
  $routeProvider

    // Home Route    
    .when('/', {
      templateUrl: 'app/views/templates/home.html'
    })

    // Login Route
    .when('/login', {
      templateUrl: 'app/views/templates/login.html',
      controller: 'LoginController'
    })

    .when('/register', {
      templateUrl: 'app/views/templates/register.html',
      controller: 'RegistrationController'
    })

    // If no match then redirect to Home Route          
    .otherwise({
      redirectTo: '/'
    });

  // Required for no base (remove '#' from address bar)
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
