angular.module('app.directives.menu.home', [])

.directive('homeMenu', [function() {
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/menu/home-menu.tpl.html',
    scope: {},
    controller: function() {
        console.log('home menu directive init');



    }
  }
}]);
