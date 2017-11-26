angular.module('app.directives.user.register', [])

.directive('registerUser', ['$location', '$timeout', 'UserService', function ($location, $timeout, UserService) {
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/user/profile-form.tpl.html',
    //scope: {},
    controller: function($scope) {
        console.log('register-user directive init');

        $scope.registeringUser = true;

        // on controller load - clear form data
        $scope.formData = {};

        /**
         * Register new user
         */
        $scope.submitForm = function (formData) {
          UserService.registerUser(formData)
            .then(resp => {
              $scope.formData.error = $scope.formData.success = false;
              if (resp.data.success) {
                // ON SUCCESS - display success mssg and redirect to home page
                $scope.formData.success = resp.data.message;
                $timeout(() => $location.path('/'), 2000);
              } else {
                $scope.formData.error = resp.data.message;
              }
            })
            .catch(err => {
              $scope.formData.success = false;
              $scope.formData.error = 'There was an error registering your account';
            });
        }


    }
  }
}]);
