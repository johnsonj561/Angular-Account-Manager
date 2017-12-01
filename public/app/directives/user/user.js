angular.module('app.directives.users', [])

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
}])


.directive('editUser', ['UserService', function(UserService) {
  return {
    restrict: 'A',
    templateUrl: 'app/views/templates/user/profile-form.tpl.html',
    scope: {},
    controller: function($scope, $timeout, $location) {

        console.log('edit-user directive init');

        $scope.editingUser = true;

        $scope.formData = {};

        UserService.getSession()
          .then(resp => {
            if (resp.data.username) {
              loadProfile(resp.data.username);
            }
          })
          .catch(err => {
            console.log('Unable to get session details', err);
          });


        function loadProfile(username) {
          UserService.getMyProfile(username)
            .then(resp => {
              $scope.formData = $scope.userProfile = resp.data.data;
            })
            .catch(err => {
              console.log('Unable to load profile', err);
            });
        }


        $scope.submitForm = function (formData) {
          $scope.formData.error = $scope.formData.success = false;
          if (!$scope.formData.name || !$scope.formData.email || !$scope.formData.username || 
            ($scope.editingPassword && (!$scope.formData.password || !$scope.formData.passwordConfirmation))) {
              return $scope.formData.error = 'Do not leave any fields blank'
          } else {
            $scope.disableSubmit = true;
            UserService.updateProfile($scope.formData)
              .then(resp => {
                if (resp.data.success) {
                  $scope.formData.success = resp.data.message + '. Redirecting home...';
                  $timeout(() => $location.path('/'), 2000);
                } else {
                  $scope.formData.error = resp.data.message;
                }
              }).catch(err => {
                console.log('Unknown error:', err);
                $scope.formData.error = 'Unknown error, unable to update profile';
              }).finally(() => {
                $scope.disableSubmit = false
              });
          }
        }

        $scope.togglePassword = function() {
          $scope.editingPassword = true;
        }

    }
  }
}]);

