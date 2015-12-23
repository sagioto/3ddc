'use strict';

var angular = require('angular');
require('./directives/_index');
require('./controllers/_index');


var requires = [
    'app.dcWidget.directives',
    'app.dcWidget.controllers',
    'app.dcWidget.factories',
    'app.dcWidget.services',
    'ngAnimate'
    ];
module.exports = angular.module('app.dcWidget', requires);

