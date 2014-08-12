var firstApp = angular.module('firstApp', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.username = 'Damian Quiroga';
    $scope.project = 'AngularApp';
}