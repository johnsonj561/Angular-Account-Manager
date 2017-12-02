angular.module('app.directives.accounts', [])

.directive('addAccount', ['AccountService', function(AccountService) {
  
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/accounts/add-account.tpl.html',
    scope: {},
    controller: function($scope, $timeout, $location) {
      console.log('add account directive init', $scope);
      
      $scope.formData = {};
      
      $scope.submitForm = function(formData) {
        $scope.formData.error = $scope.formData.success = false;
        $scope.disableSubmit = true;
        AccountService.addAccount(formData)
          .then(resp => {
            if(resp.data.success) {
              $scope.formData.success = resp.data.message + '. Redirecting home...';
              $timeout(() => $location.path('/'), 2000);
            } else {
              $scope.formData.error = resp.data.message;
            }
          })
          .catch(err => $scope.formData.error = 'Unable to process request' +err)
          .finally(() => $scope.disableSubmit = false);
      }

    }
    
  }
  
}])

.directive('accountsTable', ['AccountService', function(AccountService) {
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/accounts/account-table.tpl.html',
    scope: {},
    controller: function($scope, $timeout, $location) {
      
      console.log('accounts table directive init');
      
      AccountService.getAccounts()
        .then(resp => {
          $scope.accountList = resp.data.data;
          console.log('setting account list: ', $scope.accountList);
        }).catch(err => console.log('Account Error: ', err));
      
    }
  }
  
}]);
