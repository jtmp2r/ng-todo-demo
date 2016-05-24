app.controller("ItemViewCtrl", function($scope, $http, $routeParams){
	$scope.items = [];
	$scope.selectedItem = {};
	console.log($routeParams.itemId);


	$http.get("https://angprac.firebaseio.com/items.json")
			.success(function(itemObject) {
				console.log("check", itemObject)
				var itemCollection = itemObject;
				console.log('itemObject', itemCollection)
				Object.keys(itemCollection).forEach(function(key) {
					itemCollection[key].id=key;
					$scope.items.push(itemCollection[key]);

					$scope.selectedItem = $scope.items.filter(function(item) {
						return item.id === $routeParams.itemId;
					})[0];
				})
			})

});
	



	// $http.get(`https://angprac.firebaseio.com/items/${$routeParams.itemId}.json`)
	// 	.success(function(response){
	// 		console.log("fuck", response)
	// 	})