'use strict';

// Imports
var angular = require('angular');
var PreviewCtrl = require('./controllers/previewCtrl');
var PreviewService  = require('./services/previewService');
var NgOnLoad  = require('./directives/ngOnload');

// Work sub-module definition
var preview = angular.module('app.preview', []);
preview.service('previewService', ['$firebaseArray', PreviewService]);
preview.controller('PreviewCtrl', ['$scope','$sce','$routeParams','previewService',PreviewCtrl]);
preview.directive('ngOnLoad',[NgOnLoad]);

module.exports = preview;

