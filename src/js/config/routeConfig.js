myApp.config([
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled:        true,
            requireBase:    false,
            rewriteLinks:   false
        });

        $stateProvider
            .state('main', {
                url: '/main/',
                templateUrl: '/templates/main.html',
                controller: 'mainCtrl'
            })
            .state('list', {
                url: '/list/:query/',
                templateUrl: '/templates/list.html',
                controller: 'listCtrl'
            })
            .state('single', {
                url: '/single/:id/',
                templateUrl: '/templates/single.html',
                controller: 'singleCtrl'
            });

        $urlRouterProvider.otherwise('/main/');
    }
]);