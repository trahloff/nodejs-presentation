'use strict';
angular
    .module('userManagementCtrls', ['ngMaterial', 'ngMessages'])
    .controller('landingControl', ['$scope', '$mdDialog', '$http', function($scope, $mdDialog, $http) {

        function showAlert(userName, isPremium) {
            let title = isPremium ? 'Yeha' : 'Nope';
            let content = isPremium ? userName + ' ist Premiumnutzer' : userName + ' ist kein Premiumnutzer';
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(title)
                .textContent(content)
                .ok('ok')
            ).then(function() {
                $state.reload();
            });
        }
        $scope.test = function(user) {
            $http({
                method: 'GET',
                url: '/database' + user.name
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {});
        };
    }]);
