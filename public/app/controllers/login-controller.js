angular.module('app.controller.login', ['app.service.auth'])

  .controller('LoginController', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {

    console.log('Login Controller Init');

    // on controller load - clear form data
    $scope.formData = {};

    /**
     * Register new user
     */
    $scope.authenticateUser = function (formData) {
      console.log('Authenticate user called', formData);
      AuthService.login(formData)
        .then(resp => {
          console.log(resp);
          $scope.formData.error = $scope.formData.success = false;
          if (resp.data.success) {
            // ON SUCCESS - display success mssg and redirect to home page
            $scope.formData.success = resp.data.message;
          } else {
            $scope.formData.error = resp.data.message;
          }
        })
        .catch(err => {
          console.log(err);
          $scope.formData.success = false;
          $scope.formData.error = 'There was an error logging in';
        });
    }
  }]);
