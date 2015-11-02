'use strict';

var _ = require('lodash');
var _$http;
// imports

/**
 * StarterkitService
 */
function StarterkitService($http) {
	_$http = $http;
}

/**
 * Get all data
 */
StarterkitService.prototype.getAll = function () {
	var url = 'data/starterkits.json';
	return _$http.get(url);
};

module.exports = StarterkitService;