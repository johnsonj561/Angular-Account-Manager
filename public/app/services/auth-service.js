angular.module('app.service.auth', [])
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
    }

    return {
      login,
      isLoggedIn,
      logout
    }
  }])
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
  }]);
