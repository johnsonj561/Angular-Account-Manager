angular.module('app.service.user', [])

  .service('UserService', ['$http', function ($http) {

    function registerUser(formData) {
      return $http.post('/api/user', formData);
    }

    function authenticateUser(formData) {
      return $http.post('/api/authenticate', formData);
    }


    return {
      registerUser,
      authenticateUser
    }

  }]);
