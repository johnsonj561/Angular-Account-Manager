angular.module('app.controller.main', ['app.service'])

  .controller('MainController', ['MyService', function (MyService) {

    console.log('Main controller init');

}]);
