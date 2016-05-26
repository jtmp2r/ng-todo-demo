app.controller("ItemNewCtrl", function($scope, $location, itemStorage){
	$scope.newTask = {
		assignedTo: "",
		tools: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: ""
 	};


	$scope.addNewItem = function(){
    itemStorage.postNewItem($scope.newTask)
      .then(function successCallback(response) {
        console.log(response)
        $location.url("/items/list");
      });
    };	
})


	