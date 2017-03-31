myApp.controller('listCtrl', function($scope, $http, $state, $stateParams) {
    $scope.items = [];
    $http.get('https://api.github.com/search/repositories?q=' + $stateParams.query + '') // &sort=stars&order=desc
    .then(function (response) {
        $scope.items = response.data.items;
    });
});
    myApp.config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
    });