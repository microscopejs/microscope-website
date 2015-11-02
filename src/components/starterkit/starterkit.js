'use strict';

// Imports
var angular = require('angular');
var StarterkitService = require('./services/starterkitService');
var ListCtrl = require('./controllers/listCtrl');
var DetailCtrl = require('./controllers/detailCtrl');
var Starterkits  = require('./directives/starterkits');


// Work sub-module definition
var starterkit = angular.module('app.starterkit', []);
starterkit.service('StarterkitService', ['$http', StarterkitService]);
starterkit.controller('ListCtrl', [ListCtrl]);
starterkit.controller('DetailCtrl', ['$routeParams','$sce','StarterkitService',DetailCtrl]);
starterkit.directive('starterkits',['StarterkitService',Starterkits]);

module.exports = starterkit;

