'use strict';

// Imports
var angular = require('angular');
var PreviewCtrl = require('./controllers/previewCtrl');
var NgOnLoad  = require('./directives/ngOnload');
var Preview  = require('./directives/preview');


// Work sub-module definition
var preview = angular.module('app.preview', []);
preview.controller('PreviewCtrl', ['$routeParams', PreviewCtrl]);
preview.directive('preview',['$sce',Preview]);
preview.directive('ngOnLoad',[NgOnLoad]);

module.exports = preview;

