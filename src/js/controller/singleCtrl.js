myApp.controller('singleCtrl', function($scope, $http, $state, $stateParams) {
    $scope.items = [];
    $http.get('https://api.github.com/repositories/' + $stateParams.id + '') // &sort=stars&order=desc
    .then(function (response) {
        $scope.items = response.data;
        console.log(response.data.owner.avatar_url)
    });
});