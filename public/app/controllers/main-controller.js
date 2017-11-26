angular.module('app.controller.main', ['app.service.auth'])
  .controller('MainController', ['$rootScope', '$scope', 'AuthService', 'UserService', 'SessionService', '$interval', '$location', '$window', function ($rootScope, $scope, AuthService, UserService, SessionService, $interval, $location, $window) {

    console.log('Main controller init');

    // warn user when app has 60 seconds remaining
    const SESSION_EXPIRE_WARNING_TIME = 60;
    // check session every 30 seconds
    const CHECK_SESSION_INTERVAL = 1000 * 10;


    $scope.logoutUser = function () {
      AuthService.logout();
      $location.path('/');
    }


    function checkSession() {
      let activeSession = SessionService.isSessionValid();
      console.log('isSessionValid() = ', activeSession);
      if (activeSession) {
        let sessionInterval = $interval(() => {
          console.log('Running sessionInterval');
          activeSession = SessionService.isSessionValid();
          if (!activeSession) {
            console.log('Session is no longer active');
            $interval.cancel(sessionInterval);
            if (AuthService.isLoggedIn()) {
              AuthService.logout();
            }
            console.log('Redirecting to home page ');
            $location.path('/');
          } else {
            console.log('Session is valid!');
          }
        }, CHECK_SESSION_INTERVAL);
      }
    }

    checkSession();

    $rootScope.$on('run:checkSession', function () {
      checkSession();
    });

  }])

  .service('SessionService', ['AuthService', '$window', function (AuthService, $window) {

    /**
     * Returns parsed jwt
     */
    function parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('.', '+').replace('_', '/');
      return JSON.parse($window.atob(base64));
    }


    /**
     * Returns true if user is logged in and session is valid
     */
    function isSessionValid() {
      console.log('SessionService.isSessionValid');
      if (AuthService.isLoggedIn()) {
        console.log('AuthService.isLoggedIn');
        //        checkingSession = true;
        // get session token from browser storage then parse token
        var token = $window.localStorage.getItem('token');
        if (token === null) {
          console.log('token === null, cancelling interval');
          return false;
          //          $interval.cancel(interval);
        } else {
          console.log('token not null, parsing jwt');
          const expireTime = parseJwt(token);
          const timeStamp = Math.floor(Date.now() / 1000);
          const timeLeft = expireTime.exp - timeStamp;
          if (timeLeft <= 0) {
            return false;
          }
        }
        return true;
      }
    }

    return {
      isSessionValid
    }
}]);
