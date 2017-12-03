angular.module('app.controller.main', ['app.service.auth'])
  .controller('MainController', ['$rootScope', '$scope', 'AuthService', 'UserService', 'SessionService', '$interval', '$location', '$window', '$timeout', 'MainSpinner', function ($rootScope, $scope, AuthService, UserService, SessionService, $interval, $location, $window, $timeout, MainSpinner) {

    console.log('Main controller init');

    // warn user when app has 60 seconds remaining
    const SESSION_EXPIRE_WARNING_TIME = 60;
    // check session every 30 seconds
    const CHECK_SESSION_INTERVAL = 1000 * 10;

    let sessionInterval = false;
    
    init();
    
    
    $scope.logoutUser = function () {
      AuthService.logout();
      $scope.activeUsername = false;
      if(sessionInterval) {
        $interval.cancel(sessionInterval);
      }
      $location.path('/');
    }
    
    
    function checkSession() {
      SessionService.getSession()
        .then(resp => {
          if (!resp.data.username) return;
          $scope.activeUsername = resp.data.username;
          sessionInterval = $interval(() => {
            console.log('Running sessionInterval');
            if (!SessionService.isSessionValid()) {
              console.log('Session is no longer active');
              $interval.cancel(sessionInterval);
              if (AuthService.isLoggedIn()) {
                AuthService.logout();
              }
              $scope.activeUsername = false;
              console.log('Redirecting to home page ');
              $location.path('/');
            } else {
              console.log('Session is valid!');
            }
          }, CHECK_SESSION_INTERVAL);
        })
        .catch(err => {
          console.log('Error checking for active session: ', err);
          $scope.activeUsername = false;
        })
    }

    /**
    * MainController init
    */
    function init() {
      // check for valid session
      checkSession();
      // bind scope's loading variables to MainSpinner service,
      // to allow other controller's to trigger MainController loading
      $scope.spinnerObject = {
        loading: false,
        spinnerText: ''
      };
      MainSpinner.initSpinner($scope.spinnerObject);
    }
    
    
    // listen for checkSession requests from other controllers
    $rootScope.$on('run:checkSession', function () {
      checkSession();
    });

  }]);


