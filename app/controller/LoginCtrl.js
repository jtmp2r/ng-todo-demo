"use strict"
app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory) {
	let ref = new Firebase(firebaseURL)
	console.log('ref', ref)

	$scope.account = {
		email: "",
		password: ""
	}

	if($location.path() === '/logout') {
		ref.unauth();
	}

	$scope.register = () => {
		console.log("you clicked on register")
		ref.createUser({
			email: $scope.account.email,
			password: $scope.account.password
		}, (error, userData) => {
			if (error) {
				console.log(`Error creating User: ${error}`)
			}else{
				console.log(`Created user with uid: ${userData.uid}`)
				$scope.login();
			}
		})
	}

	$scope.login = () => {
		console.log("you clicked on login")
		AuthFactory
			.authenticate($scope.account)
			.then(() => {
				$location.path("/");
				$scope.$apply()
			})
	}
})