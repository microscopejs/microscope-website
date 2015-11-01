'use strict'

// PreviewCtrl class
function PreviewCtrl($routeParams) {
	this.url = 'http://apps.microscopejs.com:' + $routeParams.id;
	this.device = 'iphone6plus';
}

module.exports = PreviewCtrl

