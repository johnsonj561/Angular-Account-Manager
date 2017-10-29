angular.module('app.controller.main', ['app.service.auth'])
  .controller('MainController', ['$scope', 'AuthService', '$interval', '$location', '$window', function ($scope, AuthService, $interval, $location, $window) {

    console.log('Main controller init');

    // warn user when app has 60 seconds remaining
    const SESSION_EXPIRE_WARNING_TIME = 60;
    // check session every 30 seconds
    const CHECK_SESSION_INTERVAL = 1000 * 30;

    let checkingSession = false;

    $scope.logoutUser = function () {
      AuthService.logout();
      $location.path('/');
    }

    /*
     * Check Session
     * If logged in, recurring interval set to check for valid token
     * When token is near expiration, use will be promted to renew token
     */
    function checkSession() {
      console.log('Running checksession()');
      if (AuthService.isLoggedIn()) {
        console.log('AuthService.isLoggedIn');

        checkingSession = true;

        // create re-occuring interval that checks token expiration time
        var interval = $interval(function () {
          var token = $window.localStorage.getItem('token');
          if (token === null) {
            console.log('token === null, cancelling interval');
            $interval.cancel(interval);
          } else {
            console.log('token not null, parsing jwt');

            self.parseJwt = function (token) {
              const base64Url = token.split('.')[1];
              const base64 = base64Url.replace('.', '+').replace('_', '/');
              return JSON.parse($window.atob(base64));
            }

            // get the expiration time from token (initialized to 1 hour)
            const expireTime = self.parseJwt(token);

            // get current time stamp
            const timeStamp = Math.floor(Date.now() / 1000);

            // calc time til expiration = expiration time - current time
            const timeLeft = expireTime.exp - timeStamp;

            if (timeLeft < 0) {
              console.log('jwt time expired, logging out');
              Auth.logout();
              app.checkingSession = false;
              app.isLoggedIn = false;
              $location.path('/');
            } else if (timeLeft <= SESSION_EXPIRE_WARNING_TIME) {
              console.log('timeLeft is less than warning time, warning user now');
              $interval.cancel(interval);
            }
          }
        }, CHECK_SESSION_INTERVAL);
      }
    };


    checkSession();


}]);
