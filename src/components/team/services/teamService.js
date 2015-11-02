'use strict';

var _ = require('lodash');
var _$http;
// imports

/**
 * StarterkitService
 */
function TeamService($http) {
	_$http = $http;
}

/**
 * Get all data
 */
TeamService.prototype.getAll = function () {
	var url = 'data/team.json';
	return _$http.get(url);
};

module.exports = TeamService;