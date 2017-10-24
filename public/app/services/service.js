angular.module('app.service', [])

  .service('MyService', ['$http', function ($http) {

    function saveAccount(accountData) {
      return $http.post('/api/account', accountData);
    }


    function getAccounts() {
      return $http.get('/api/account');
    }


    return {
      saveAccount,
      getAccounts
    }

}]);
