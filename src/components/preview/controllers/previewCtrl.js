'use strict'

var _$sce;

// PreviewCtrl class
function PreviewCtrl($routeParams,previewService) {

	this.title = 'Preview';
	var idApp = $routeParams.id
	this.device = 'iphone6plus';
	this.app = previewService.get(idApp);
	
}


module.exports = PreviewCtrl

