angular.module('app.directives.loading', [])

.directive('loadingSpinner', [function() {
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/loading/loading-display.tpl.html',
    scope: {
      spinnerText: '@'
    },
    controller: function($scope) {
      console.log('Loading display directive init');
      console.log('spinner text = ', $scope.spinnerText);
    }
    
  }
}])