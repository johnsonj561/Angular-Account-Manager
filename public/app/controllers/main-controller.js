angular.module('app.controller.main', ['app.service.auth'])
  .controller('MainController', ['$rootScope', '$scope', 'AuthService', 'UserService', 'SessionService', '$interval', '$location', '$window', function ($rootScope, $scope, AuthService, UserService, SessionService, $interval, $location, $window) {

    console.log('Main controller init');

    // warn user when app has 60 seconds remaining
    const SESSION_EXPIRE_WARNING_TIME = 60;
    // check session every 30 seconds
    const CHECK_SESSION_INTERVAL = 1000 * 10;

    let sessionInterval = false;
    
    
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

    checkSession();

    $rootScope.$on('run:checkSession', function () {
      checkSession();
    });

  }])

  .service('SessionService', ['AuthService', '$window', '$http', function (AuthService, $window, $http) {

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

    function getSession() {
      return $http.get('/api/session');
    }

    return {
      isSessionValid,
      getSession
    }
}]);
