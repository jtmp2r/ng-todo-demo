var app = angular.module("TodoApp", [])


app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "Hello";
	$scope.showListView = true;
	$scope.newTask = {};

	$scope.items = [
		{
			id: 0,
			task: "mow the lawn, Teriq",
			isCompleted: true,
			dueDate: "12/5/17",
			assignTo: 'greg',
			location: "Zoe's House",
			urgency: "low",
			tools: 'sunshine, clippers, hat, water, headphones'
		},
		{
			id: 1,
			task: "grade quizzes",
			isCompleted: true,
			dueDate: "12/5/17",
			assignTo: 'Joe',
			location: "NSS",
			urgency: "HIGH",
			tools: 'wifi, tissues, vodka'
		},
		{
			id: 2,
			task: "Workout",
			isCompleted: false,
			dueDate: "12/5/17",
			assignTo: 'Teriq',
			location: "Anywhere",
			urgency: "Mediun",
			tools: "gym, body, fire"
		}
	]

	$scope.newItem = function() {
		console.log("click me BITCH!!!")
		$scope.showListView = false;
	}
	$scope.allItem = function() {
		console.log("click me! click me! CLICK ME!!!!!")
		$scope.showListView = true;

	}

	$scope.addNewItem= function() {
		$scope.newTask.id = $scope.items.length;
		console.log("hello... cunt", $scope.newTask)
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
	}

})