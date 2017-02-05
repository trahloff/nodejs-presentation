'use strict';
angular
    .module('userManagementCtrls', ['ngMaterial', 'ngMessages'])
    .controller('landingControl', ['$scope', '$mdDialog', '$http', '$state', function($scope, $mdDialog, $http, $state) {

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
                url: '/database/' + user.name
            }).then(function successCallback(response) {
                showAlert(user.name, response.data.premium)
            });
        };











































    }]);
