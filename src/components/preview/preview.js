'use strict';

// Imports
var angular = require('angular');
var PreviewCtrl = require('./controllers/previewCtrl');
var PreviewService  = require('./services/previewService');
var NgOnLoad  = require('./directives/ngOnload');
var Preview  = require('./directives/preview');


// Work sub-module definition
var preview = angular.module('app.preview', []);
preview.service('previewService', [PreviewService]);
preview.controller('PreviewCtrl', ['$routeParams','previewService',PreviewCtrl]);
preview.directive('preview',['$sce',Preview]);
preview.directive('ngOnLoad',[NgOnLoad]);

module.exports = preview;

