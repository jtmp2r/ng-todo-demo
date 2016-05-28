var app = angular.module("TodoApp", ["ngRoute"])
		.constant("firebaseURL", "https://angprac.firebaseio.com/")


let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	if (AuthFactory.isAuthenticated()) {
		console.log("USer is ready, resolve route promis");
		resolve();
	}else{
		console.log("User is NOT ready, reject route promis");
		reject();
	}
})


app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'partials/item-list.html',
			controller: 'ItemListCtrl',
			resolve: {isAuth}
		})
		.when("/items/list", {
			templateUrl: 'partials/item-list.html',
			controller: 'ItemListCtrl',
			resolve: {isAuth}
		})
		.when("/items/new", {
			templateUrl: 'partials/item-new.html',
			controller: 'ItemNewCtrl',
			resolve: {isAuth}
		})
		.when('/items/:itemId', {
			templateUrl: 'partials/item-details.html',
			controller: "ItemViewCtrl",
			resolve: {isAuth}
		})
		.when('/items/:itemId/edit', {
			templateUrl: 'partials/item-new.html',
			controller: "ItemEditCtrl",
			resolve: {isAuth}
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl"
		})
		.when('/logout', {
			templateUrl: 'partials/login.html',
			controller: "LoginCtrl"
		}).
		otherwise('/');
})

app.run(($location) => {
	let todoRef = new Firebase("https://angprac.firebaseio.com/")

	todoRef.onAuth(authData => {
		if(!authData){
			$location.path("/login");
		}
	})
})


