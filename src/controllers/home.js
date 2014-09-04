angularApp.controller('homeController', function($scope, $http, $routeParams) {
    $scope.seccionName = 'Incio';

    var getData = function(){
		$http.get('src/data/buesquedas.json').success(function(data) {
    		$scope.busquedas = data;
  		});
	}
	 
	var timer = setInterval(function() {
	    $scope.$apply(getData);
	}, 10000);
	 
	getData();
});