/* global service */
'use strict';

// Imports
var angular = require('angular');
var TeamCtrl = require('./controllers/teamCtrl');



// Work sub-module definition
var team = angular.module('app.team', []);
team.controller('TeamCtrl', [TeamCtrl]);


module.exports = team;

