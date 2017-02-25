/**
 * Explorations module
 */

import MainController from './controllers/MainController';

export default angular.module('myMaterialSeed.main', [] )
    .controller('MainController', MainController)
    .controller('directiveTwo', function() {
      console.log('hello');
    });
