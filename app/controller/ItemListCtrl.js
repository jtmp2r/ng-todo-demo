app.controller("ItemListCtrl", function($scope, $location, itemStorage){
	$scope.items = [];

	itemStorage.getItemList().then(function(itemCollection) {
		console.log("muthafucker", itemCollection)
		$scope.items = itemCollection;
	})



	$scope.itemDelete = function(itemId){
	    console.log("itemId", itemId);
	    itemStorage.deleteItem(itemId).then(function(response){
	     	itemStorage.getItemList().then(function(itemCollection){
	        $scope.items = itemCollection;
	      })
	    })
	}


	$scope.inputeChange = function(item) {
		itemStorage.updateCompletedStatus(item)
			.then(function(response) {
				console.log(response)
			})
	}
})
