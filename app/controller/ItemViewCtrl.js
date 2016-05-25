app.controller("ItemViewCtrl", function($scope, $http, $routeParams, itemStorage){
	$scope.items = [];
	$scope.selectedItem = {};
	console.log($routeParams.itemId);


  itemStorage.getItemList().then(function(itemCollection){
    console.log("itemCollection from promise", itemCollection);
    $scope.items = itemCollection;
    $scope.selectedItem = $scope.items.filter(function(item){
			return item.id === $routeParams.itemId;
		})[0];
  })

});
	



	// $http.get(`https://angprac.firebaseio.com/items/${$routeParams.itemId}.json`)
	// 	.success(function(response){
	// 		console.log("fuck", response)
	// 	})