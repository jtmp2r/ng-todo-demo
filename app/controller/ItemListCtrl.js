app.controller("ItemListCtrl", function($scope, $http){
	$scope.items = [];

	$http.get("https://angprac.firebaseio.com/items.json")
		.success(function(itemObject) {
			console.log("check", itemObject)
			var itemCollection = itemObject;
			console.log('itemObject', itemCollection)
			Object.keys(itemCollection).forEach(function(key) {
				itemCollection[key].id=key;
				$scope.items.push(itemCollection[key]);
			})
		})
})