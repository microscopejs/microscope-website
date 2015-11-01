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

		.when('/server', {
			templateUrl: '/components/server/controllers/server.html'
		})

		.when('/frontend', {
			templateUrl: '/components/frontend/controllers/frontend.html'
		})

		.when('/mobile', {
			templateUrl: '/components/mobile/controllers/mobile.html'
		})
		
		.when('/preview/:id', {
			templateUrl: '/components/preview/controllers/preview.html'
		})

		.otherwise({ redirectTo: '/' });
}

module.exports = Router;