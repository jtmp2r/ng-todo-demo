app.controller("ItemNewCtrl", function($scope){
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
})