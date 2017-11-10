angular.module('app.controller.edit-profile', [])

  .controller('EditProfileController', ['$scope', 'UserService', function ($scope, UserService) {

    $scope.formData = {};

    UserService.getSession()
      .then(resp => {
        console.log(resp);
        if (resp.data.username) {
          loadProfile(resp.data.username);
        } else {
          console.log('Unable to get session details');
        }
      })
      .catch(err => {
        console.log('Unable to get session details');
      });



    function loadProfile(username) {
      UserService.getMyProfile(username)
        .then(resp => {
          console.log('loadProfile resp: ', resp.data);
          $scope.formData = resp.data.data;
        })
        .catch(err => {
          console.log('Unable to load profile');
        });
    }


    $scope.updateProfile = function () {
      $scope.formData.error = $scope.formData.success = false;
      $scope.disableSubmit = true;
      if (!$scope.formData.name || !$scope.formData.email || !$scope.formData.username) {
        return $scope.formData.error = 'Do not leave any fields blank'
      } else {
        UserService.updateProfile($scope.formData)
          .then(resp => {
            if (resp.data.success) {
              console.log('Profile Updated', resp);
              $scope.formData.success = resp.data.message;
            } else {
              console.log('Unable to update profile', resp)
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

  }]);
