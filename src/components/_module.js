/**
 * Components module
 */
import {MaterialSectionDirective} from './material-section/directives/MaterialSectionDirective';


export default angular.module('myMaterialSeed.components', [])
    .directive('ctMaterialSection', MaterialSectionDirective);
