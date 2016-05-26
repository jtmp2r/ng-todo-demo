app.controller("ItemEditCtrl", function($scope, $location, itemStorage, $routeParams){
	$scope.newTask = {};


	itemStorage.getSingleItem($routeParams.itemId)
		.then(function successCallback(response) {
			$scope.newTask=response;
		})

	$scope.addNewItem = function(){
    itemStorage.updateItem($routeParams.itemId, $scope.newTask)
      .then(function successCallback(response) {
        console.log(response)
        $location.url("/items/list");
      });
    };	


})
