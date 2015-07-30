'use strict';

// Imports
var angular = require('angular');
var DocsCtrl  = require('./controllers/docsCtrl');

// docs sub-module definition
var docs = angular.module('app.docs', []);
docs.controller('DocsCtrl', ['$routeParams', DocsCtrl]);

module.exports = docs;