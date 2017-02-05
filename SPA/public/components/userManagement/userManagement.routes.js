angular
    .module('userManagementRoutes', [])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('landing', {
                templateUrl: "/components/userManagement/landing.html",
                controller: 'landingControl',
                url: "/users"
            })
    }])
