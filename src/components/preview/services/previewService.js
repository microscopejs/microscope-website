'use strict';

var _ = require('lodash');
var data = require('../data.json');
// imports

/**
 * PreviewService
 */
function PreviewService() {
	
}

/**
 * Get all data
 */
PreviewService.prototype.getAll = function () {
	return data.starters;
};

/**
 * Get data by id
 */
PreviewService.prototype.get = function (id) {
	return _.findWhere(data.starters,{id:id});
};

module.exports = PreviewService;