angular.module('app.service.auth', [])

  /**
   * Authorization Service
   * Provides various user authorization utilities
   */
  .factory('AuthService', ['$http', 'AuthToken', function ($http, AuthToken) {

    function login(loginData) {
      return $http.post('/api/authenticate', loginData).then(function (data) {
        AuthToken.setToken(data.data.token);
        return data;
      });
    }

    function isLoggedIn() {
      return !!(AuthToken.getToken() && AuthToken.getToken() !== null);
    }

    function getUser() {
      if (AuthToken.getToken()) {
        return $http.post('/api/me');
      } else {
        $q.reject({
          message: 'User does not have token'
        });
      }
    }

    function logout() {
      AuthToken.setToken();
      console.log('Logging out...');
    }

    return {
      login,
      isLoggedIn,
      logout
    }
  }])

  /**
   * Authorization Token getter/setter
   * Stores token in browser's local storage
   */
  .factory('AuthToken', ['$window', function ($window) {

    function setToken(token) {
      if (token) {
        $window.localStorage.setItem('token', token);
      } else {
        $window.localStorage.removeItem('token');
      }
    }

    function getToken() {
      return $window.localStorage.getItem('token');
    }

    return {
      setToken,
      getToken
    }
  }])

  /**
   * Authorization Interceptors
   * On request, store token in headers[x-access-token]
   */
  .factory('AuthInterceptors', ['AuthToken', function (AuthToken) {

    function request(config) {
      const token = AuthToken.getToken();
      if (token) {
        config.headers['x-access-token'] = token;
      }
      return config;
    }

    return {
      request
    }
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
