app.controller("ItemNewCtrl", function($scope, $http, $location){
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: ""
 	};


	$scope.addNewItem = function() {
		$http.post(
			"https://angprac.firebaseio.com/items.json", 
			JSON.stringify({
				assignedTo: $scope.newTask.assignedTo,
				tools: $scope.newTask.tools,
				dueDate: $scope.newTask.dueDate,
				isCompleted: $scope.newTask.isCompleted,
				location: $scope.newTask.location,
				task: $scope.newTask.task,
				urgency: $scope.newTask.urgency
			})
			).success(function(response) {
				console.log(response)
				$location.url("/items/list");
			})
	}	
})


		// $scope.newTask.isCompleted = false;
		// $scope.newTask.id = $scope.items.length;
		// console.log("what what", $scope.newTask)
		// $scope.items.push($scope.newTask);
		// $scope.newTask = "";