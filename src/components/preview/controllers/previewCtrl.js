'use strict'

var _$sce;

// PreviewCtrl class
function PreviewCtrl($scope,$sce,$routeParams,firebaseService) {
	var self = this;
	this.title = 'Preview';
	_$sce = $sce;
	var idApp = $routeParams.id
	
	this.app = firebaseService.get(idApp);
	
	this.getSource();
	
	this.iframeLoaded = function(contentLocation){
		console.log(contentLocation);
		self.isLoading = false;
		$scope.$apply();
	};
	
}

PreviewCtrl.prototype.getSource = function () {
	
	this.source = _$sce.trustAsResourceUrl(this.app.iframe);
};

module.exports = PreviewCtrl

