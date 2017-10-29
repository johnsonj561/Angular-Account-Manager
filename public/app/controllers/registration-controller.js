angular.module('app.controller.registration', ['app.service.user'])

  .controller('RegistrationController', ['$scope', '$location', '$timeout', 'UserService', function ($scope, $location, $timeout, UserService) {


    console.log('Registration Controller Init');

    // on controller load - clear form data
    $scope.formData = {};

    /**
     * Register new user
     */
    $scope.registerUser = function (formData) {
      UserService.registerUser(formData)
        .then(resp => {
          console.log(resp);
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
          console.log(err);
          $scope.formData.success = false;
          $scope.formData.error = 'There was an error registering your account';
        });
    }


  }]);
