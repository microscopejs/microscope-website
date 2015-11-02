'use strict'

var _ = require('lodash');
// DetailCtrl class
function DetailCtrl($routeParams,$sce,StarterkitSerice) {
	var self = this;
	var idStarter = $routeParams.id;

	
	StarterkitSerice.getAll().then(function(result){
		self.starter = _.findWhere(result.data,{'id':idStarter});
		
		var readmeUrl = self.starter.readme;
		self.starter.readme = $sce.trustAsResourceUrl(readmeUrl);
	});
	
	this.device = 'iphone6plus';
}

module.exports = DetailCtrl

