angular.module('app.service.user', [])

  .service('UserService', ['$http', function ($http) {

    function registerUser(formData) {
      return $http.post('/api/user', formData);
    }

    function getMyProfile() {
      return $http.get('/api/profile');
    }

    function getSession() {
      return $http.get('/api/session');
    }

    function updateProfile(formData) {
      return $http.post('/api/updateprofile', formData);
    }

    return {
      registerUser,
      getMyProfile,
      getSession,
      updateProfile
    }

  }]);
