'use strict';

var angular = require('angular');
require('../lib/angular-parallax');
require('../lib/angular-locale_en');
require('../lib/angular-translate');
require('../lib/ui-bootstrap');
global.jQuery = require("jquery");
require('bootstrap');
// angular modules
require('angular-animate');
require('angular-ui-router');
require('./templates');
require('./dcWidget/_index');
require('./application/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'duParallax',
    'ngLocale',
    'pascalprecht.translate',
    'templates',
    'app.dcWidget',
    'app.application',
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes'));

  angular.module('app').config(require('./messages'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
