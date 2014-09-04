var  angularApp = angular.module('firstApp',  ['ngRoute']);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.username = 'Damian Quiroga';
    $scope.project = 'AngularApp';
}

// Configuración de las rutas

angularApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'src/views/home.html',
            controller 	: 'homeController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularApp.controller('homeController', function($scope) {
    $scope.seccionName = 'Incio';
});