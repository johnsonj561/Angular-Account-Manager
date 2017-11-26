angular.module('app.directives.auth.login', [])

.directive('loginUser', ['$location', '$timeout', 'AuthService', function ($location, $timeout, AuthService) {
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/auth/login-form.tpl.html',
    scope: {},
    controller: function($scope) {

        console.log('login-user directive init');

        // on controller load - clear form data
        $scope.formData = {};

        /**
         * Register new user
         */
        $scope.authenticateUser = function (formData) {
          console.log('Authenticate user called', formData);
          AuthService.login(formData)
            .then(resp => {
              $scope.formData.error = $scope.formData.success = false;
              if (resp.data.success) {
                // ON SUCCESS - display success mssg and redirect to home page
                $scope.formData.success = resp.data.message + '. Redirecting Home...';
                $scope.$emit('run:checkSession');
                $timeout(() => $location.path('/'), 2000);
              } else {
                $scope.formData.error = resp.data.message;
              }
            })
            .catch(err => {
              $scope.formData.success = false;
              $scope.formData.error = 'There was an error logging in';
            });
        }

    }
  }
}]);
