/* global service */
'use strict';

// Imports
var angular = require('angular');
var TrelloCtrl = require('./controllers/trelloCtrl');

// Work sub-module definition
var trello = angular.module('app.trello', []);
trello.controller('TrelloCtrl', [TrelloCtrl]);


module.exports = trello;