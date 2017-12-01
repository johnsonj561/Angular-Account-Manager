angular.module('app.service.accounts', [])

  .service('AccountService', ['$http', function ($http) {

    function addAccount(formData) {
      return $http.post('/api/account', formData);
    }

    return {
      addAccount
    }

  }]);
