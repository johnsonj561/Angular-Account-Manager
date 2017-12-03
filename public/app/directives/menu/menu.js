angular.module('app.directives.menu', [])

  .directive('homeMenu', ['MainSpinner', function (MainSpinner) {
    return {
      restrict: 'A',
      templateUrl: 'app/views/templates/menu/home-menu.tpl.html',
      scope: {
        activeUsername: '='
      },
      controller: function ($scope, $timeout) {
        console.log('home menu directive init', $scope.activeUsername);
        

      }
    }
}]);
