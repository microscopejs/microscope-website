'use strict';

// DocsCtrl class
function DocsCtrl ($routeParams) {
	this.page = '/docs/'+ $routeParams.page + '.md';
}

module.exports = DocsCtrl;