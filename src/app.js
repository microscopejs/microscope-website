'use strict';

// Imports
var angular = require('angular');
window.jQuery = window.$ = require('jquery');
require('angular-sanitize')
require('angular-route');
require('angular-marked');
require('angular-spinner');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');
require('./components/preview/preview');
require('./components/docs/docs');
require('./components/server/server');
require('./components/mobile/mobile');
require('./components/frontend/frontend');

// Injection
var app = angular.module('app', [
	'ngSanitize',
	'ngRoute',
	'hc.marked',
	'angularSpinner',
	'app.home',
	'app.docs',
	'app.mobile',
	'app.server',
	'app.frontend',
	'app.preview'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);