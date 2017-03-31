myApp.controller('mainCtrl', function($scope, $http, $state) {
    $scope.name = 'Репозиторий';
    $scope.button = 'Искать';
    $scope.isDisabled = true;
    $scope.description = '';
    $scope.googleUrl = 'http://google.com';
    $scope.keydown = function() {
        if($scope.description.length == 1){
            console.log('test')
        }
    };

});