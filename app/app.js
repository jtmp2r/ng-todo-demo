var app = angular.module("TodoApp", ["ngRoute"])

app.config(function($routeProvider) {
	$routeProvider.
		when("/items/list", {
			templateUrl: 'partials/item-list.html',
			controller: 'TodoCtrl'
		})
})



