/* global service */
'use strict';

// Imports
var angular = require('angular');
var TeamService = require('./services/teamService');
var TeamCtrl = require('./controllers/teamCtrl');
var Team  = require('./directives/team');


// Work sub-module definition
var team = angular.module('app.team', []);
team.service('TeamService', ['$http', TeamService]);
team.controller('TeamCtrl', [TeamCtrl]);
team.directive('team',['TeamService',Team]);

module.exports = team;

