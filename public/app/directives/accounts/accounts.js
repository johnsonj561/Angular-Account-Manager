angular.module('app.directives.accounts', [])

.directive('addAccount', [function() {
  
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/accounts/add-account.tpl.html',
    scope: {},
    controller: function($scope) {
      console.log('add account directive init', $scope);
    }
    
  }
  
}])

