/*eslint angular/di: [2,"array"]*/

import Routes from './RouteConfigurations';

export default angular
    .module('myMaterialSeed.configuration', [ ] )
    .config( [ '$routeProvider', '$locationProvider', ($routeProvider) => {
       Routes.configure($routeProvider);
     }]);
