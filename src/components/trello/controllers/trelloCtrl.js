'use strict'

// TrelloCtrl class
function TrelloCtrl() {
	this.isLoading = true;
}

TrelloCtrl.prototype.iframeLoaded = function(){
	this.isLoading = false;
};

module.exports = TrelloCtrl;