angular.module('app.service.user', [])

  .service('UserService', ['$http', function ($http) {

    function registerUser(formData) {
      return $http.post('/api/user', formData);
    }


    return {
      registerUser
    }

  }]);
