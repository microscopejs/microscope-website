'use strict';

// Router class
function Router($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: '/components/home/controllers/home.html'
	})
	
	.when('/docs/:page', {
		templateUrl: '/components/docs/controllers/docs.html'
	})

	.otherwise({ redirectTo: '/' });
}

module.exports = Router;