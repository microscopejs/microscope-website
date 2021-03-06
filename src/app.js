'use strict';

// Imports
window.jQuery = window.$ = require('jquery');
var angular = require('angular');
require('../node_modules/microscope-ui/dist/js/microscope.ui');
require('angular-sanitize')
require('angular-route');
require('angular-marked');
require('angular-spinner');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');
require('./components/starterkit/starterkit');
require('./components/preview/preview');
require('./components/docs/docs');
require('./components/server/server');
require('./components/mobile/mobile');
require('./components/frontend/frontend');
require('./components/team/team');
require('./components/trello/trello');

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
	'app.preview',
	'app.starterkit',
	'app.team',
	'app.trello'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);
