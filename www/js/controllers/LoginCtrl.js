app.controller('LoginCtrl', function($scope, AuthFactory, $window){
// I NEED TO CHANGE THIS TO A GOOGLE LOGIN
	$scope.account = {
		email: '',
		password: ''
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
		.then((userData) => {
			$scope.login();
		});
	};

	$scope.login = () => {
		AuthFactory.loginUser($scope.account)
		.then((user) => {
			$window.location.href = '#/home';
		});
	};

});