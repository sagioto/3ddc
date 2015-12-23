'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

require('./controllers/_index');

var requires = [
    'app.application.controllers'
];

module.exports = angular.module('app.application', requires);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);


