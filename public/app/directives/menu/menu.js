angular.module('app.directives.menu', [])

  .directive('homeMenu', [function () {
    return {
      restrict: 'A',
      templateUrl: 'app/views/templates/menu/home-menu.tpl.html',
      scope: {
        activeUsername: '='
      },
      controller: function ($scope) {
        console.log('home menu directive init', $scope.activeUsername);



      }
    }
}]);
