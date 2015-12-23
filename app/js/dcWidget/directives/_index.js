'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.dcWidget.directives', ['ngAnimate']);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);